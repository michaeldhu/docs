// function* gen() {
//   console.log('start');
//   console.log('start');
//   const a = yield 1;
//   console.log('a', a);

//   try {
//     console.log('try');
//     const b = yield 2;
//     console.log('b', b);
//   } catch (e) {
//     console.log('e', e);
//   } finally {
//     console.log('clean up');
//   }

//   try {
//     console.log('try');
//     const c = yield 3;
//     console.log('c', c);
//   } catch (e) {
//     console.log('e', e);
//   } finally {
//     console.log('clean up');
//   }

//   yield 4;

//   return 5;
// }

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

function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
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
function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return e;
    };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[e]
    );
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return { type: "normal", arg: t.call(e, r) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(p));
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await")
          ? e.resolve(h.__await).then(
              function (t) {
                invoke("next", t, i, a);
              },
              function (t) {
                invoke("throw", t, i, a);
              }
            )
          : e.resolve(h).then(
              function (t) {
                (u.value = t), i(u);
              },
              function (t) {
                return invoke("throw", t, i, a);
              }
            );
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return (r = r
          ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return { value: t, done: !0 };
      }
      for (n.method = i, n.arg = a; ; ) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;
        else if ("throw" === n.method) {
          if (o === h) throw ((o = s), n.arg);
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (((o = n.done ? s : l), p.arg === y)) continue;
          return { value: p.arg, done: n.done };
        }
        "throw" === p.type && ((o = s), (n.method = "throw"), (n.arg = p.arg));
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t)
      return (
        (r.delegate = null),
        ("throw" === n &&
          e.iterator.return &&
          ((r.method = "return"),
          (r.arg = t),
          maybeInvokeDelegate(e, r),
          "throw" === r.method)) ||
          ("return" !== n &&
            ((r.method = "throw"),
            (r.arg = new TypeError(
              "The iterator does not provide a '" + n + "' method"
            )))),
        y
      );
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type)
      return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), y;
    var a = i.arg;
    return a
      ? a.done
        ? ((r[e.resultName] = a.value),
          (r.next = e.nextLoc),
          "return" !== r.method && ((r.method = "next"), (r.arg = t)),
          (r.delegate = null),
          y)
        : a
      : ((r.method = "throw"),
        (r.arg = new TypeError("iterator result is not an object")),
        (r.delegate = null),
        y);
  }
  function pushTryEntry(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = "normal"), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      t.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length; )
              if (n.call(e, o))
                return (next.value = e[o]), (next.done = !1), next;
            return (next.value = t), (next.done = !0), next;
          };
        return (i.next = i);
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0,
    }),
    o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0,
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      u,
      "GeneratorFunction"
    )),
    (e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return (
        !!e &&
        (e === GeneratorFunction ||
          "GeneratorFunction" === (e.displayName || e.name))
      );
    }),
    (e.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype),
            define(t, u, "GeneratorFunction")),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (e.awrap = function (t) {
      return { __await: t };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    defineIteratorMethods(g),
    define(g, u, "Generator"),
    define(g, a, function () {
      return this;
    }),
    define(g, "toString", function () {
      return "[object Generator]";
    }),
    (e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function next() {
          for (; r.length; ) {
            var t = r.pop();
            if (t in e) return (next.value = t), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (e.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e)
        )
          for (var r in this)
            "t" === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return (
            (a.type = "throw"),
            (a.arg = e),
            (r.next = n),
            o && ((r.method = "next"), (r.arg = t)),
            !!o
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (
            o.tryLoc <= this.prev &&
            n.call(o, "finallyLoc") &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = "next"), (this.next = i.finallyLoc), y)
            : this.complete(a)
        );
      },
      complete: function complete(t, e) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && e && (this.next = e),
          y
        );
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e, r, n) {
        return (
          (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
          "next" === this.method && (this.arg = t),
          y
        );
      },
    }),
    e
  );
}
var _marked = /*#__PURE__*/ _regeneratorRuntime().mark(gen);
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
function gen() {
  var a, b, c;
  return _regeneratorRuntime().wrap(
    function gen$(_context) {
      while (1)
        switch ((_context.prev = _context.next)) {
          case 0:
            console.log("start");
            console.log("start");
            _context.next = 4;
            return 1;
          case 4:
            a = _context.sent;
            console.log("a", a);
            _context.prev = 6;
            console.log("try");
            _context.next = 10;
            return 2;
          case 10:
            b = _context.sent;
            console.log("b", b);
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](6);
            console.log("e", _context.t0);
          case 17:
            _context.prev = 17;
            console.log("clean up");
            return _context.finish(17);
          case 20:
            _context.prev = 20;
            console.log("try");
            _context.next = 24;
            return 3;
          case 24:
            c = _context.sent;
            console.log("c", c);
            _context.next = 31;
            break;
          case 28:
            _context.prev = 28;
            _context.t1 = _context["catch"](20);
            console.log("e", _context.t1);
          case 31:
            _context.prev = 31;
            console.log("clean up");
            return _context.finish(31);
          case 34:
            _context.next = 36;
            return 4;
          case 36:
            return _context.abrupt("return", 5);
          case 37:
          case "end":
            return _context.stop();
        }
    },
    _marked,
    null,
    [
      [6, 14, 17, 20],
      [20, 28, 31, 34],
    ]
  );
}
function agen() {
  return _agen.apply(this, arguments);
}
function _agen() {
  _agen = _wrapAsyncGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
      var a, b, c;
      return _regeneratorRuntime().wrap(
        function _callee$(_context2) {
          while (1)
            switch ((_context2.prev = _context2.next)) {
              case 0:
                console.log("start");
                console.log("start");
                _context2.next = 4;
                return _awaitAsyncGenerator(1);
              case 4:
                _context2.next = 6;
                return _context2.sent;
              case 6:
                a = _context2.sent;
                console.log("a", a);
                _context2.prev = 8;
                console.log("try");
                _context2.next = 12;
                return _awaitAsyncGenerator(2);
              case 12:
                _context2.next = 14;
                return _context2.sent;
              case 14:
                b = _context2.sent;
                console.log("b", b);
                _context2.next = 21;
                break;
              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](8);
                console.log("e", _context2.t0);
              case 21:
                _context2.prev = 21;
                console.log("clean up");
                return _context2.finish(21);
              case 24:
                _context2.prev = 24;
                console.log("try");
                _context2.next = 28;
                return _awaitAsyncGenerator(3);
              case 28:
                _context2.next = 30;
                return _context2.sent;
              case 30:
                c = _context2.sent;
                console.log("c", c);
                _context2.next = 37;
                break;
              case 34:
                _context2.prev = 34;
                _context2.t1 = _context2["catch"](24);
                console.log("e", _context2.t1);
              case 37:
                _context2.prev = 37;
                console.log("clean up");
                return _context2.finish(37);
              case 40:
                _context2.next = 42;
                return _awaitAsyncGenerator(4);
              case 42:
                _context2.next = 44;
                return _context2.sent;
              case 44:
                _context2.next = 46;
                return _awaitAsyncGenerator(5);
              case 46:
                return _context2.abrupt("return", _context2.sent);
              case 47:
              case "end":
                return _context2.stop();
            }
        },
        _callee,
        null,
        [
          [8, 18, 21, 24],
          [24, 34, 37, 40],
        ]
      );
    })
  );
  return _agen.apply(this, arguments);
}
function asyncAwait() {
  return _asyncAwait.apply(this, arguments);
}
function _asyncAwait() {
  _asyncAwait = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
      var a, b, c;
      return _regeneratorRuntime().wrap(
        function _callee2$(_context3) {
          while (1)
            switch ((_context3.prev = _context3.next)) {
              case 0:
                console.log("start");
                console.log("start");
                _context3.next = 4;
                return 1;
              case 4:
                a = _context3.sent;
                console.log("a", a);
                _context3.prev = 6;
                console.log("try");
                _context3.next = 10;
                return 2;
              case 10:
                b = _context3.sent;
                console.log("b", b);
                _context3.next = 17;
                break;
              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](6);
                console.log("e", _context3.t0);
              case 17:
                _context3.prev = 17;
                console.log("clean up");
                return _context3.finish(17);
              case 20:
                _context3.prev = 20;
                console.log("try");
                _context3.next = 24;
                return 3;
              case 24:
                c = _context3.sent;
                console.log("c", c);
                _context3.next = 31;
                break;
              case 28:
                _context3.prev = 28;
                _context3.t1 = _context3["catch"](20);
                console.log("e", _context3.t1);
              case 31:
                _context3.prev = 31;
                console.log("clean up");
                return _context3.finish(31);
              case 34:
                _context3.next = 36;
                return 4;
              case 36:
                _context3.next = 38;
                return 5;
              case 38:
                return _context3.abrupt("return", _context3.sent);
              case 39:
              case "end":
                return _context3.stop();
            }
        },
        _callee2,
        null,
        [
          [6, 14, 17, 20],
          [20, 28, 31, 34],
        ]
      );
    })
  );
  return _asyncAwait.apply(this, arguments);
}
