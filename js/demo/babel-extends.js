// class People {
//   static clsName = people;
//   static count = 0;
//   #name;

//   constructor(name) {
//     this.#name = name;
//     this.constructor.count += 1;
//   }

//   getName() {
//     return this.#name
//   }

//   getClsName() {
//     return this.constructor.clsName;
//   }

//   static getCount() {
//     return this.count
//   }
// }

// class Man extends People {
//   static sex = 'man';
//   #age;
//   #p;

//   constructor(name, age) {
//     super(name);
//     this.#age = age;
//   }

//   static getSex() {
//     return this.sex;
//   }

//   get #phone() {
// 	return this.#p;
//   }

//   set #phone(phone) {
//     this.#p = phone
//   }

//   get age() {
//     return this.#age
//   }

//   set age(age) {
//     this.#age = age
//   }
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
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e)
    )
  );
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _getPrototypeOf(t) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(t)
  );
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        }),
    _setPrototypeOf(t, e)
  );
}
function _classPrivateMethodInitSpec(e, a) {
  _checkPrivateRedeclaration(e, a), a.add(e);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _classPrivateFieldInitSpec(e, t, a) {
  _checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _checkPrivateRedeclaration(e, t) {
  if (t.has(e))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
}
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _classPrivateFieldGet(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldSet(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
var _name = /*#__PURE__*/ new WeakMap();
var People = /*#__PURE__*/ (function () {
  function People(name) {
    _classCallCheck(this, People);
    _classPrivateFieldInitSpec(this, _name, void 0);
    _classPrivateFieldSet(_name, this, name);
    this.constructor.count += 1;
  }
  return _createClass(
    People,
    [
      {
        key: "getName",
        value: function getName() {
          return _classPrivateFieldGet(_name, this);
        },
      },
      {
        key: "getClsName",
        value: function getClsName() {
          return this.constructor.clsName;
        },
      },
    ],
    [
      {
        key: "getCount",
        value: function getCount() {
          return this.count;
        },
      },
    ]
  );
})();
_defineProperty(People, "clsName", people);
_defineProperty(People, "count", 0);
var _age = /*#__PURE__*/ new WeakMap();
var _p = /*#__PURE__*/ new WeakMap();
var _Man_brand = /*#__PURE__*/ new WeakSet();
var Man = /*#__PURE__*/ (function (_People2) {
  function Man(name, age) {
    var _this3;
    _classCallCheck(this, Man);
    _this3 = _callSuper(this, Man, [name]);
    _classPrivateMethodInitSpec(_this3, _Man_brand);
    _classPrivateFieldInitSpec(_this3, _age, void 0);
    _classPrivateFieldInitSpec(_this3, _p, void 0);
    _classPrivateFieldSet(_age, _this3, age);
    return _this3;
  }
  _inherits(Man, _People2);
  return _createClass(
    Man,
    [
      {
        key: "age",
        get: function get() {
          return _classPrivateFieldGet(_age, this);
        },
        set: function set(age) {
          _classPrivateFieldSet(_age, this, age);
        },
      },
    ],
    [
      {
        key: "getSex",
        value: function getSex() {
          return this.sex;
        },
      },
    ]
  );
})(People);
function _get_phone(_this) {
  return _classPrivateFieldGet(_p, _this);
}
function _set_phone(_this2, phone) {
  _classPrivateFieldSet(_p, _this2, phone);
}
_defineProperty(Man, "sex", "man");
