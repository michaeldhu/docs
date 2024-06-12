function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _awaitAsyncGenerator(e) {
  return new _OverloadYield(e, 0);
}
function _wrapAsyncGenerator(r) {
  return function () {
    return new _AsyncGenerator(r.apply(this, arguments));
  };
}
function _AsyncGenerator(e) {
  var r, t;
  function resume(r, t) {
    try {
      var n = e[r](t),
        o = n.value,
        u = o instanceof _OverloadYield;
      Promise.resolve(u ? o.v : o).then(
        function (t) {
          if (u) {
            var i = "return" === r ? "return" : "next";
            if (!o.k || t.done) return resume(i, t);
            t = e[i](t).value;
          }
          settle(n.done ? "return" : "normal", t);
        },
        function (e) {
          resume("throw", e);
        }
      );
    } catch (e) {
      settle("throw", e);
    }
  }
  function settle(e, n) {
    switch (e) {
      case "return":
        r.resolve({ value: n, done: !0 });
        break;
      case "throw":
        r.reject(n);
        break;
      default:
        r.resolve({ value: n, done: !1 });
    }
    (r = r.next) ? resume(r.key, r.arg) : (t = null);
  }
  (this._invoke = function (e, n) {
    return new Promise(function (o, u) {
      var i = { key: e, arg: n, resolve: o, reject: u, next: null };
      t ? (t = t.next = i) : ((r = t = i), resume(e, n));
    });
  }),
    "function" != typeof e.return && (this.return = void 0);
}
(_AsyncGenerator.prototype[
  ("function" == typeof Symbol && Symbol.asyncIterator) || "@@asyncIterator"
] = function () {
  return this;
}),
  (_AsyncGenerator.prototype.next = function (e) {
    return this._invoke("next", e);
  }),
  (_AsyncGenerator.prototype.throw = function (e) {
    return this._invoke("throw", e);
  }),
  (_AsyncGenerator.prototype.return = function (e) {
    return this._invoke("return", e);
  });
function _OverloadYield(e, d) {
  (this.v = e), (this.k = d);
}
function agen() {
  return _agen.apply(this, arguments);
}
function _agen() {
  _agen = _wrapAsyncGenerator(function* () {
    console.log("start");
    console.log("start");
    const a = yield yield _awaitAsyncGenerator(1);
    console.log("a", a);
    try {
      console.log("try");
      const b = yield yield _awaitAsyncGenerator(2);
      console.log("b", b);
    } catch (e) {
      console.log("e", e);
    } finally {
      console.log("clean up");
    }
    try {
      console.log("try");
      const c = yield yield _awaitAsyncGenerator(3);
      console.log("c", c);
    } catch (e) {
      console.log("e", e);
    } finally {
      console.log("clean up");
    }
    yield yield _awaitAsyncGenerator(4);
    return yield _awaitAsyncGenerator(5);
  });
  return _agen.apply(this, arguments);
}
function asyncAwait() {
  return _asyncAwait.apply(this, arguments);
}
function _asyncAwait() {
  _asyncAwait = _asyncToGenerator(function* () {
    console.log("start");
    console.log("start");
    const a = yield 1;
    console.log("a", a);
    try {
      console.log("try");
      const b = yield 2;
      console.log("b", b);
    } catch (e) {
      console.log("e", e);
    } finally {
      console.log("clean up");
    }
    try {
      console.log("try");
      const c = yield 3;
      console.log("c", c);
    } catch (e) {
      console.log("e", e);
    } finally {
      console.log("clean up");
    }
    yield 4;
    return yield 5;
  });
  return _asyncAwait.apply(this, arguments);
}



// async function* agen() {
//   console.log('start');
//   console.log('start');
//   const a = yield await 1;
//   console.log('a', a);

//   try {
//     console.log('try');
//     const b = yield await 2;
//     console.log('b', b);
//   } catch (e) {
//     console.log('e', e);
//   } finally {
//     console.log('clean up');
//   }

//   try {
//     console.log('try');
//     const c = yield await 3;
//     console.log('c', c);
//   } catch (e) {
//     console.log('e', e);
//   } finally {
//     console.log('clean up');
//   }

//   yield await 4;

//   return await 5;
// }

// async function asyncAwait() {
//   console.log('start');
//   console.log('start');
//   const a = await 1;
//   console.log('a', a);

//   try {
//     console.log('try');
//     const b = await 2;
//     console.log('b', b);
//   } catch (e) {
//     console.log('e', e);
//   } finally {
//     console.log('clean up');
//   }

//   try {
//     console.log('try');
//     const c = await 3;
//     console.log('c', c);
//   } catch (e) {
//     console.log('e', e);
//   } finally {
//     console.log('clean up');
//   }

//   await 4;

//   return await 5;
// }
