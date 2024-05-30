const STATE = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
}

class MyPromise {
  #state = STATE.PENDING;
  #value = undefined;
  #caches = [];

  constructor(fn) {
    if (typeof fn !== 'function') throw new TypeError('executor is not function');

    try {
      fn(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (e) {
      this.#reject(e);
    }
  }

  #resolve(value) {
    if (this.#state !== STATE.PENDING) return;
    if (value === this) throw new TypeError('a promise cannot be resolved by itself');
    if ((typeof value === 'object' || typeof value === 'function') && typeof value.then === 'function') {
      try {
        value.then(this.#resolve.bind(this), this.#reject.bind(this));
      } catch (e) {
        this.#reject(e);
      }
      return;
    }

    this.#state = STATE.FULFILLED;
    this.#value = value;
    this.#handleCaches();
  }

  #reject(reason) {
    if (this.#state !== STATE.PENDING) return;
    this.#state = STATE.REJECTED;
    this.#value = reason;
    this.#handleCaches();
  }

  #handleCaches() {
    this.#caches.forEach(item => this.#handle(...item));
    this.#caches = [];
  }

  #handle(onFulfilled, onRejected, resolve, reject) {
    if (this.#state === STATE.PENDING) {
      this.#caches.push([onFulfilled, onRejected, resolve, reject]);
      return;
    }

    const task = () => {
      try {
        const cb = this.#state === STATE.FULFILLED ? onFulfilled : onRejected;
        resolve(cb(this.#value));
      } catch (e) {
        reject(e)
      }
    };

    queueMicrotask(task);
  }

  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {
      onFulfilled = (value) => value;
    }

    if (typeof onRejected !== 'function') {
      onRejected = (reason) => { throw reason };
    }

    const { promise, resolve, reject } = this.constructor.withResolvers();

    this.#handle(onFulfilled, onRejected, resolve, reject);

    return promise;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      (value) => this.constructor.resolve(onFinally()).then(() => value),
      (reason) => this.constructor.resolve(onFinally()).then(() => { throw reason })
    );
  }

  static resolve(value) {
    return new this((resolve) => resolve(value));
  }

  static reject(reason) {;
    return new this((rs, reject) => reject(reason));
  }

  static #handleIterable(iterable, executor) {
    checkIterable(iterable);
    const arr = [...iterable];
    if (!arr.length) return this.resolve(arr);

    return new this(executor.bind(null, arr));
  }

  static all(iterable) {
    return this.#handleIterable(iterable, (arr, resolve, reject) => {
      let count = 0, len = arr.length;
      arr.forEach((item, idx) => this.resolve(item).then(
        (value) => {
          arr[idx] = value;
          if (++count === len) resolve(arr);
        },
        (reason) => reject(reason)
      ))
    });
  }

  static allSettled(iterable) {
    return this.#handleIterable(iterable, (arr, resolve) => {
      let count = 0, len = arr.length;
      arr.forEach((item, idx) => this.resolve(item).then(
        (value) => (arr[idx] = { status: STATE.FULFILLED, value }),
        (reason) => (arr[idx] = { status: STATE.REJECTED, reason }),
      ).finally(() => (++count === len && resolve(arr))))
    });
  }

  static any(iterable) {
    return this.#handleIterable(iterable, (arr, resolve, reject) => {
      let count = 0, len = arr.length;
      arr.forEach((item, idx) => this.resolve(item).then(
        (value) => resolve(value),
        (reason) => {
          arr[idx] = reason;
          if (++count === len) reject(new AggregateError(arr));
        }
      ))
    });
  }

  static race(iterable) {
    return new this((resolve, reject) => [...iterable].forEach(item => this.resolve(item).then(
      (value) => resolve(value),
      (reason) => reject(reason)
    )));
  }

  static withResolvers() {
    let resolve, reject;
    const promise = new this((rs, rj) => (resolve = rs, reject = rj));
    return { promise, resolve, reject };
  }
}

function checkIterable(value) {
  if (!value || typeof value[Symbol.iterator] !== 'function') {
    throw new TypeError(`${typeof value} is not iterable`);
  }
}

console.log("test start");

// const p0 = new MyPromise((resolve, reject) => {
//   setTimeout(() => resolve(100), 1000);
// }).then(value => console.log('resolved', value))

/* ------- all, allSettled, any, race ------- */
function newP() {
  return new MyPromise((resolve, reject) => {
    const range = 2000;
    const delay = Math.floor(Math.random() * range);

    // setTimeout(() => (delay > range / 2 ? resolve(delay) : reject(new Error(delay))), delay);
    setTimeout(() => resolve(delay), delay);
  });
}

const p = MyPromise.all([newP(), newP(), newP()])

p.then((value) => {
  console.log('resolved', value)
}, (reason) => {
  console.log('rejected', reason)
})

console.log("test end");
