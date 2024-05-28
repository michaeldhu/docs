const STATE = {
  PENDING: "pending",
  FUlFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  _state = STATE.PENDING;
  _value = undefined;
  _caches = [];

  constructor(fn) {
    try {
      fn(this._resolve.bind(this), this._reject.bind(this));
    } catch (e) {
      this._reject(e);
    }
  }

  _resolve(value) {
    if (this._state !== STATE.PENDING) return;
    if (value === this)
      throw new TypeError("A promise cannot be resolved with itself.");
    if (value instanceof MyPromise) {
      value.then(this._resolve.bind(this), this._reject.bind(this));
      return;
    }

    if (
      (typeof value === "object" || typeof value === "function") &&
      typeof value.then === "function"
    ) {
      try {
        value.then(this._resolve.bind(this), this._reject.bind(this));
      } catch (e) {
        this._reject(e);
      }
      return;
    }

    this._state = STATE.FUlFILLED;
    this._value = value;
    this._handleCaches();
  }

  _reject(reason) {
    if (this._state !== STATE.PENDING) return;
    this._state = STATE.REJECTED;
    this._value = reason;
    this._handleCaches();
  }

  _handleCaches() {
    this._caches.forEach((handler) => {
      this._handle(...handler);
    });
    this._caches = [];
    console.log(this);
  }

  _handle(onFulfilled, onRejected, resolve, reject) {
    if (this._state === STATE.PENDING) {
      this._caches.push([onFulfilled, onRejected, resolve, reject]);
      return;
    }

    const task = () => {
      try {
        const cb = this._state === STATE.FUlFILLED ? onFulfilled : onRejected;
        resolve(cb(this._value));
      } catch (e) {
        reject(e);
      }
    };

    queueMicrotask(task);
    // setTimeout(task, 0);
  }

  then(onFulfilled, onRejected) {
    let resolve, reject;
    const promise = new MyPromise((rs, rj) => {
      resolve = rs;
      reject = rj;
    });

    if (typeof onFulfilled !== "function") {
      onFulfilled = (value) => value;
    }

    if (typeof onRejected !== "function") {
      onRejected = (reason) => {
        throw reason;
      };
    }

    this._handle(onFulfilled, onRejected, resolve, reject);

    return promise;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      (value) => Promise.resolve(onFinally()).then(() => value),
      (reason) =>
        Promise.resolve(onFinally()).then(() => {
          throw reason;
        })
    );
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason));
  }

  static all(iterable) {
    const arr = [...iterable];
    if (!arr.length) return Promise.resolve(arr);

    return new Promise((resolve, reject) => {
      let count = 0;
      for (let i = 0, len = arr.length; i < len; i++) {
        Promise.resolve(arr[i]).then(
          value => {
            arr[i] = value;
            if (++count === len) {
              resolve(arr);
            }
          },
          reason => reject(reason),
        );
      }
    });
  }

  static allSettled(iterable) {
    const arr = [...iterable];
    if (!arr.length) return Promise.resolve(arr);

    return new Promise((resolve) => {
      let count = 0, len = arr.length;
      arr.forEach((item, idx) => {
        Promise.resolve(item).then((value) => {
          arr[idx] = {
            status: STATE.FUlFILLED,
            value,
          }
        }, (reason) => {
          arr[idx] = {
            status: STATE.REJECTED,
            reason,
          }
        }).finally(() => {
          if (++count === len) {
            resolve(arr);
          }
        })
      })
    });
  }

  static any(iterable) {
    const arr = [...iterable];
    if (!arr.length) return Promise.resolve(arr);

    return new Promise((resolve, reject) => {
      let count = 0;
      for (let i = 0, len = arr.length; i < len; i++) {
        Promise.resolve(arr[i]).then(
          value => resolve(value),
          reason => {
            arr[i] = reason;
            if (++count === len) {
              reject(new AggregateError(arr));
            }
          },
        );
      }
    });
  }

  static race(iterable) {
    return new Promise((resolve, reject) => {
      Array.prototype.forEach.call(iterable, (item) => {
        Promise.resolve(item).then(resolve, reject);
      });
    });
  }
}

console.log("test start");

// const p = new MyPromise((resolve, reject) => {
//   setTimeout(() => reject(100), 1000);
// });

// const p2 = p.then(() => "p2");

// const p3 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("try resolve p3");
//     resolve(p);
//   }, 100);
// }).then(
//   () => {
//     console.log("p3 resolved");
//     return "p3 resolved";
//   },
//   () => {
//     console.log("p3 rejected");
//     return "p3 rejection handled";
//   }
// );

function newP() {
  return new MyPromise((resolve, reject) => {
    const range = 2000;
    const delay = Math.floor(Math.random() * range);

    setTimeout(() => (delay < range / 2 ? resolve(delay) : reject(new Error(delay))), delay);
    // setTimeout(() => resolve(delay), delay);
  });
}

MyPromise.race([newP(), newP(), newP()]).then((value) => {
  console.info('resolved', value)
}, (reason) => {
  console.info('rejected', reason)
})

console.log("test end");
