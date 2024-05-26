# Built-in Objects

## Overview

### Value properties

- globalThis
- Infinity
- NaN
- undefined

### Function properties

- eval()
- isFinite()
- isNaN()
- parseFloat()
- parseInt()
- encodeURI()
- encodeURIComponent()
- decodeURI()
- decodeURIComponent()

### Fundamental Objects

- Object
- Function
- Boolean
- Symbol

### Error Objects

- Error
- AggregateError
- EvalError
- RangeError
- ReferenceError
- SyntaxError
- TypeError
- URIError

### Numbers and Dates

- Number
- BigInt
- Math
- Date

### Text processing

- String
- RegExp

### Indexed collections

- Array
- Int8Array
- Int16Array
- Int32Array
- BigInt64Array
- Uint8Array
- Uint8ClampedArray
- Uint16Array
- Uint32Array
- BigUint64Array
- Float32Array
- Float64Array

### Keyed collections

- Map
- Set
- WeekMap
- WeekSet

### Structured Data

- ArrayBuffer
- SharedArrayBuffer
- DataView
- Atomics
- JSON

### Managing memory

- WeekRef
- FinalizationRegistry

### Control Abstraction Objects

- Iterator
- AsyncIterator
- Promise
- GeneratorFunction
- AsyncGeneratorFunction
- Generator
- AsyncGenerator
- AsyncFunction

### Reflection

- Reflex
- Proxy

### Internationalization

- Intl
- Intl.Collator
- Intl.DateTimeFormat
- Intl.DisplayNames
- Intl.DurationFormat
- Intl.ListFormat
- Intl.Locale
- Intl.NumberFormat
- Intl.PluralRules
- Intl.RelativeTimeFormat
- Intl.Segmenter

## globalThis

For browser is `window` or `self` or `frames`, for Web Workers is `self`, for Nodejs is `global`.

## Infinity

Infinity equals to Number.POSITIVE_INFINITY, while `-Infinity` equals to Number.NEGATIVE_INFINITY

## NaN

NaN is Not-A-Number which equals to Number.NaN

## undefined

`undefined` is only a variable of global scope, thus you can use undefined as an identifier in any other scope.

```javascript

  (() => {
    const undefined = 123;
    return typeof undefined; // number
  })()

```

## eval()

`eval()` evaluates JavaScript code represents as a string and returns its completion value. Do not use for security risks.

## isFinite()

The isFinite function determines whether a value is finite, first converting the value to a number if necessary.

A finite number is not NaN or ±Infinity.

## isNaN()

The isNaN function determines whether a value is NaN, first converting the value to a number if necessary.

## parseFloat(value)

The value will be coerced to a string first.

## parseInt(value, radix)

The value will be coerced to a string first.

## encodeURI()

The function encodes a URI by replacing each instance of characters by escape sequences representing the UTF-8 encoding of the character. Preventing encode characters that are part of URI syntax.

## encodeURIComponent()

Encoding all characters include those that are part of URI syntax, except `A–Z a–z 0–9 - _ . ! ~ * ' ( )`.

## decodeURI()

## decodeURIComponent()

## Object

Nearly all objects in javascript are instances of Object, a typical object inherits properties from Object.prototype, although these properties may be shadowed (a.k.a overridden). While Object.prototype is not inherits from Object.prototype, it's prototype is null and is the only immutable prototype.

### Object initializer

```javascript

const obj = {
 a: 'foo',
 b: 77,
 c: true,
 d: {},

  1: 'number literal property',
  'foo:bar': 'string literal property',

  shortHandProperty,

  method(parameters) {},
  *generator(parameters) {},

  get property() {},
  set property(value) {},

  [expression]: 'computed property',

  __proto__: prototype,

  ...spreadProperties
}

```

An object initializer is an expression that describe the initialization of an object.

The `__proto__` key is standardized syntax, in contrast to the non-standard and not-performant `Object.prototype.__proto__` accessor. It sets the `[[Prototype]]` during object creation, similar to `Object.create()`.

Only a `__proto__` prototype setter is permitted in an object literal. Multiple prototype setters are a syntax error. Only colon notation is prototype setter, while shortHand and string literal property is just a normal property.

```javascript

const __proto__ = 'variable';

const obj1 = {
  __proto__: null,
  __proto__: {}
}; // SyntaxError

const obj2 = {
  '__proto__': 'hello',
  __proto__: null
}; // object with property __proto__ and null as prototype.

const object3 = {
  '__proto__': 'hello',
  __proto__,
  __proto__: null
}; // object with property __proto__ whose value is 'variable', and null as prototype.

```

#### Object literal syntax vs JSON

- JSON only permits property definition using the `"property": value` syntax. The property name must be double-quoted, and the definition can not be shorthand. Computed property names are not allowed either.
- JSON property values can only be strings, numbers, true, false, null, arrays, or another JSON.

### null-prototype objects

In practice, objects with null prototype are used as a cheap substitute for maps. The presence of Object.prototype properties will cause bugs:

```javascript

const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

hasPerson("hasOwnProperty"); // true
getAge("toString"); // [Function: toString]

```

Using a null-prototype object removes this hazard without introducing too much complexity to the `hasPerson` and `getAge` function:

```javascript

const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined

```

#### create null-prototype objects

```javascript

const obj = Object.create(null, {});
const obj2 = { __proto__: null };

```

#### JavaScript built-in APIs that produce null-prototype objects

- The return value of `Object.groupBy()`
- The `groups` and `indices.groups` properties of the result of `RegExp.prototype.exec()`
- `Array.prototype[Symbol.unscopables]` Contains property names that were not included in the ECMAScript standard prior to the ES2015 version and that are ignored for `with` statement-bounding purposes.
- `import.meta` exposes context-specific metadata to a JavaScript module.
- Module namespace objects, obtained through `import * as ns from 'module'` or `import()`.

```javascript

/* ------- Object.groupBy() ------- */

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ type }) => type);

/*
Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/

/* ------- RegExp.prototype.exec() ------- */

// Math ' quick brown' followed by 'jumps', ignoring characters in between
// Remember 'brown' and 'jumps'
// Ignore case

const re = /quick\s(?<color>brown).+?(jumps)/dgi;
const result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog.');
/**
result is an array, and the value of result
 * [0]: 'Quick Brown Fox Jumps'
 * [1]: 'Brown'
 * [2]: 'Jumps'
 * index: 4
 * indices: [[4, 25], [10, 15], [20, 25]]
 * indices.groups: { color: [10, 15 ]}
 * input: 'The Quick Brown Fox Jumps Over The Lazy Dog.'
 * groups: { color: 'Brown' }
 */

```

### static methods

- `Object.assign(target, source1, source2, ..., sourceN)` copies enumerable and own properties from the source object to a target object. Properties in the target object are overridden by properties in the sources if they have the same key. Later sources' properties overridden earlier ones. Return the target object.
- `Object.create(proto, propertiesObject)` creates a new object using an existing object as the prototype of the newly created object. Return the created object. Throw error if proto is neither null nor an object.
- `Object.defineProperties(obj, propDescriptorsObj)` defines new or modifies existing properties directly on an object. Return the object. propDescriptorsObj is an object contains property descriptors.
- `Object.defineProperty(obj, prop, descriptor)` defines a new property or modifies an existing property directly on an object. Return the object. If configurable was false, then all modifies by using this method would throw a TypeError.
- `Object.entries(obj)` returns an array of a given object's own enumerable string-keyed property key-value pairs. Non-object arguments are coerced to objects. undefined and null can't be coerced to objects and throw a TypeError upfront. Only strings may have own enumerable properties,while all other primitives return an empty array.
- `Object.freeze(obj)` freezes an object that prevents extensions and makes existing properties non-writeable and non-configurable. Freeze is shallow. Return the same object. In strict mode any modify of a frozen object will cause a TypeError. Freezing a non-empty TypedArray or DataView will also cause a TypeError. Private properties do not have the concept of property descriptors, which means private properties of an frozen object still can be changed.
- `Object.fromEntries(iterable)` transforms a list of key-value pairs(iterable) into an object. Return a new object. Iterable should be two-0element array-like object. It performs the reverse of `Object.entries()`, except that `Object.entries()` only returns string-keyed properties, while `Object.fromEntries()` can also create symbol-keyed properties.
- `Object.getOwnPropertyDescriptor(obj, prop)` returns an object describing the configuration of a specific property on a given object. prop can be string or symbol, if not exist on the obj, undefined will be returned. A non-object first argument will coerced to an object at first. Those can't be coerced to an object will cause a TypeError.
- `Object.getOwnPropertyDescriptors(obj)` returns all own property descriptors.
- `Object.getOwnPropertyNames(obj)` returns an array of strings that corresponds to the own properties of the object.
- `Object.getOwnPropertySymbols(obj)` returns an array of symbol properties found directly upon the object.
- `Object.getPrototypeOf(obj)` returns the prototype of the specified object.
- `Object.groupBy(items, callbackFn)` returns a grouped object.
- `Object.hasOwn(obj, prop)` returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false. It is recommended over `Object.prototype.hasOwnProperty()`, because it works for null-prototype objects and objects that have overridden the inherited hasOwnProperty method.
- `Object.is(value1, value2)` determines whether two values are the same value. Same as `===`, except treatment of signed zeros and NaN. The `===` treats -0 and +0 as equal, but treats NaN as not equal to each other. While the `==` will coerce the value to same type first before testing for equality.
- `Object.isExtensible(obj)` determines whether the obj is extensible that is whether it can have new properties added to it. An object can be marked as non-extensible by using one of Object.preventExtensions(), Object.seal(), Object.freeze(), or Reflect.preventExtensions.
- `Object.isFrozen(obj)` determines whether the obj is frozen. Since primitives are, by definition, immutable, the method returns true.
- `Object.isSealed(obj)` determines whether the obj is sealed.
- `Object.keys(obj)` returns an array of the given object's own enumerable string-keyed property names. Same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well. Non-object arguments are coerced to object. null and undefined can't coerced to objects and throw a TypeError upfront.
- `Object.preventExtensions(obj)` prevents new properties from ever being added to the object. It also prevents the object's prototype from being re-assigned, while properties still can be added to the prototype. Return the same Object.
- `Object.seal(obj)` seals an object that prevents extensions and makes own properties non-configurable. The object's properties can still be changed as long as they are writable. Return the same object.
- `Object.setPrototypeOf(obj, prototype)` changes the object's prototype to another object or null. Return the same object. Throw TypeError, if the first arguments is null, undefined, or non-extensible. A very slow operation.
- `Object.values(obj)` returns an array of the given object's own enumerable string-keyed property values.

### instance methods

- `Object.prototype.hasOwnProperty(prop)` returns a boolean indicates whether the object has the specific property as it's own property. No checking for prototype chain. Be careful about non-prototype object and overridden hasOwnProperty.
- `Object.prototype.isPrototypeOf(obj)` checks if this object exists in another object's prototype chain.
- `Object.prototype.propertyIsEnumerable(prop)` returns a boolean indicates whether the specific property is this object's own enumerable property. Most built-in properties are non-enumerable by default.
- `Object.prototype.toLocaleString()` returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes. All objects inherit from Object.prototype inherit the toLocaleString method. Object's toLocaleString returns the result of calling this.toString().
- `Object.prototype.toString()` returns a string representing this object. This method is meant to overridden by derived objects for custom type coerce logic.
- `Object.prototype.valueOf()` converts an object to a primitive value. JavaScript automatically invokes it when encountering an object where a primitive value is expected.

### instance properties

- `Object.prototype.constructor` returns to the constructor function that created the instance object.

### checking inherits

Using instanceof key words to determine whether an object is instance of a class.

### deleting a property from an object

Using delete key words to delete a property.

### demos

```javascript

/* ------ create a sallow copy ------ */

Object.create(
  Object.getProtoTypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
)

/* ------ get non-enumerable properties ------ */

const enumAndNonEnum = Object.getOwnPropertyNames(obj)
const enumOnly = new Set(Object.keys(obj))
const nonEnumOnly = enumAndNonEnum.filter(key => !enumOnly.has(key));

/* ------ checking for own property ------ */

const example = {};
example.prop = "exists";
Object.hasOwn(example, "prop"); // true

const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')

```

## Function

### instance methods

- `Function.prototype[Symbol.hasInstance](value)` specifies the default procedure for determining if a constructor function recognize an object as one of the constructor's instances. It is called by the instanceof operator.
- `Function.prototype.apply(thisArg[, argsArray])` assigns an arbitrary value as this when calling an existing function.
- `Function.prototype.call(thisArg[, arg1[, arg2[, ...[, argN]]]])`
- `Function.prototype.bind(thisArg[, arg1[, arg2[, ...[, argN]]]])`
- `Function.prototype.toString()`

### instance properties

- `Function: length` indicates the number of parameters expected by the function. The number excludes the reset parameter and only includes parameters before the fist one with a default value. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.
- `Function: name` indicates the function's name as specified when it was created, or it may be 'anonymous' or '' for functions created anonymously. Return a string.
- `Function: prototype`, when a function is called with new, the constructor's prototype property will become the resulting object's prototype.

## Boolean

### instance methods

- `Boolean.prototype.toString()` overrides the Object.prototype.toString
- `Boolean.prototype.valueOf()` overrides the Object.prototype.valueOf

## Symbol

### static methods

- `Symbol.for(key)` creates a symbol available in a global symbol registry list. Checking the symbol with the given key is already present in the registry. In that case, that symbol is returned. If no symbol with the given key is found, symbol.for will create a new global symbol.
- `Symbol.keyFor(sym)` retrieves a shared symbol key from the global symbol registry for the given symbol. Return the key or undefined.

### static properties

- `Symbol.asyncIterator`, the async iterable protocol looks up this symbol for the method that returns the async iterator for an object.
- `Symbol.hasInstance`, the instanceof operator looks up this symbol on it's right-hand operand for the method used to determine if the constructor recognizes an object as instance.
- `Symbol.isConcatSpreadable`, the `Array.prototype.concat()` method looks up this symbol on each object being concatenated to determine if it should be treated as an array-like object and flattened to its array elements.
- `Symbol.iterator`, the iterable protocol looks up this symbol for the method that returns the iterator for an object.
- `Symbol.match`, the `String.prototype.math()`
- `Symbol.matchAll`
- `Symbol.replace`
- `Symbol.search`
- `Symbol.species`
- `Symbol.split`
- `Symbol.toPrimitive`
- `Symbol.toStringTag`, Object.prototype.toString() looks up this symbol on `this` value for the property containing a string that represents the type of the Object.
- `Symbol.unscopables`

### instance methods

- `Symbol.prototype[Symbol.toPrimitive](hint)` returns the primitive value of a Symbol object.
- `Symbol.prototype.toString()`
- `Symbol.prototype.valueOf()`

### instance properties

- `Symbol.prototype.description` returns a string containing the description of this symbol or undefined.

```javascript

/* ------ toStringTag ------ */

class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'Validator';
  }
}

console.log(Object.prototype.toString.call(new ValidatorClass()));

```

## Error

### instance methods

- `Error.prototype.toString()`

```javascript

Error.prototype.toString = function () {
  if (
    this === null ||
    (typeof this !== "object" && typeof this !== "function")
  ) {
    throw new TypeError();
  }
  let name = this.name;
  name = name === undefined ? "Error" : `${name}`;
  let msg = this.message;
  msg = msg === undefined ? "" : `${msg}`;
  if (name === "") {
    return msg;
  }
  if (msg === "") {
    return name;
  }
  return `${name}: ${msg}`;
};

```

### instance properties

- `Error: cause`, instance indicates the specific original cause of the error.
- `Error: message`, a human-readable description fo the error.
- `Error.prototype.name` represents the name for the type of error.
- `Error.prototype.stack`, non-standard, offers a trace of the call stack.

## AggregateError

### instance properties

- `AggregateError: errors` contains an array representing errors that were aggregated.

```javascript

Promise.any([Promise.reject(new Error("some error"))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "All Promises rejected"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
});

```

## EvalArray

Not thrown by JavaScript anymore, just for compatible.

## RangeError

RangeError indicates an error when a value is not in the set or range of allowed values.

```javascript

function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("The argument must be between -500 and 500.");
  }
}

check(1000)

2.56234.toFixed(1000); // the argument of toFixed should between 0 and 100, out of the range, a RangeError thrown.

```

## ReferenceError

ReferenceError represents an error when a variable that doesn't exist in the current scope referenced.

```javascript

let a = undefinedVariable;

```

## SyntaxError

SyntaxError represents an error when trying to interpret syntactically invalid code.

```javascript

foo bar;

```

## TypeError

TypeError represents an error when an operation could be performed, typically when a value is not of the expected type.

```javascript

null.fn();

```

## URIError

URIError represents an error when a global URI handling function was used in a wrong way.

```javascript

decodeURIComponent('%')

```

## Number

Number values represent floating-point number like 77 or -7.7. Number type is a [double-precision 64-bit binary format IEEE-754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)

### Static methods

- `Number.isFinite(value)` determines whether the value is finite. Coerce first.
- `Number.isInteger(value)` determines whether the value is integer. NaN and Infinity is not integer, while floating point number that can be represented as integer also returns true, e.g 7.0.
- `Number.isNaN(value)`
- `Number.isSafeInteger(value)`, the save integers consist of all integer form -2^53^ -1 to 2^53^ -1. Integers out of the range are not safe integer, since it can't be represent as IEEE-754 double-precision number.
- `Number.parseFloat(value)` equals to the global parseFloat, the purpose is modularization of globals.
- `Number.parseInt(value)` equals to the global parseInt.

### Static properties

- `Number.EPSILON` represents the difference between 1 and the smallest floating point number greater than 1. Since floating point number can't be precisely represent by using IEEE-754 standard.
- `Number.MAX_SAFE_INTEGER` represents the maximum safe integer 2^53^ - 1
- `Number.MAX_VALUE` represents the maximum value representable in JavaScript.
- `Number.MIN_SAFE_INTEGER`
- `Number.MIN_VALUE`
- `Number.NaN`
- `Number.NEGATIVE_INFINITY`
- `Number.POSITIVE_INFINITY`

### Instance methods

- `Number.prototype.toExponential([fractionDigits])` returns a string representing the number in exponential notation. Throw TypeError when this method is invoked on non-number. Throw RangeError when the fractionDigits is out the range of 0 to 100.
- `Number.prototype.toFixed([digits])` formats the number using [fixed-point notation](https://en.wikipedia.org/wiki/Fixed-point_arithmetic). Throw same error above.
- `Number.prototype.toLocaleString()`
- `Number.prototype.toPrecision([precision])`
- `Number.prototype.toString()`
- `Number.prototype.valueOf()`

## BigInt

BigInt values represent values which are too large to be represented by the number primitive. BigInt value can not be used whit methods in the built-in Math object and can not be mixed up with number value in operations.

With n at last digit represent BigInt value, e.g 7n.

### Static methods

- `BigInt.asIntN(bits, bigint)` truncates a BigInt value to the given number of least significant bits and returns that value as a singed integer.
- `BigInt.asUintN(bits, bigint)` same as above but return unsigned integer.

### Instance methods

- `BigInt.prototype.toLocaleString()`
- `BigInt.prototype.toString()`
- `BigInt.prototype.valueOf()`

## Math

The Math namespace object contains static properties and methods for mathematical constants and functions. Only works with Number, does not work with BigInt.

### Most used

- `Math.abs(value)` returns the absolute value of a number.
- `Math.cbrt(value)` returns the cube root of a number.
- `Math.ceil(value)` rounds up and returns the smallest integer greater than or equal to the given number.
- `Math.floor(value)` rounds down and returns the largest integer less than or equal to the given number.
- `Math.max(value, value1, ..., valueN)` returns the largest number or -Infinity if there is no arguments.
- `Math.min(value, value1, ..., valueN)` returns the smallest number or Infinity if there is no arguments.
- `Math.pow(base, exponent)` returns the value of a base raised to a power.
- `Math.random()` returns a floating-point, pseudo-random number between 0(inclusive) and 1(exclusive).
- `Math.round(value)` returns the value of a number rounds to the nearest integer.
- `Math.sqrt(value)` returns the square root of a number.
- `Math.trunc(value)` returns the the integer part of a number by removing any fractional digits.
- `Math.E` 2.718
- `Math.PI` 3.14159

## Date

Date object encapsulate an integral number that represents milliseconds since the midnight at the beginning of January, 1, 1970, UTC.

### Constructor

```javascript

new Date()
new Date(milliseconds)
new Date(dateString) // format as 'YYYY-MM-DDTHH:mm:ss.sssZ', parse by Date.prase()
new Date(dateObject) // copy the dateObject

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

Date()

```

### Static methods

- `Date.now()` returns a number representing the timestamp, in milliseconds, of the current time. For complex scenarios, you should use performance api.
- `Date.parse(dataString)` parses a string representation of a date, and returns the date's timestamp that is milliseconds. Supported format of the string including GMT and UTC styled date string, e.g 2019-01-01T00:00:00.000Z, 2019-01-01T00:00:00.000+08:00, 01 Jan 1970 00:00:00 GMT. If the string not match the format, then return NaN.
- `Date.UTC(year[, monthIndex[, day[, hour[, minute[, second[, millisecond]]]]]])` returns the date's timestamp.

### Instance methods

- `Date.prototype[Symbol.toPrimitive](hint)` If the hit is 'string' | 'default', the method returns date string. If it is 'number', the method returns timestamp. For other values the method throws a TypeError. This method is called by this.valueOf which returns timestamp or this.toString which returns date string. When primitive coercion is needed, the valueOf will be called before toString.
- `Date.prototype.getFullYear()` returns the year for this date according to local time.
- `Date.prototype.getMonth()` returns the month index for this date according to local time.
- `Date.prototype.getDate()` returns the day of the month for this date according to local time.
- `Date.prototype.getDay()` returns the day of the week, where 0 represent Sunday for this date according to local time.
- `Date.prototype.getHours()` returns the hours for this date according to local time.
- `Date.prototype.getMinutes()`
- `Date.prototype.getSeconds()`
- `Date.prototype.getMilliseconds()`
- `Date.prototype.getTime()` returns timestamp.
- `Date.prototype.getTimezoneOffset()` returns timezone offset from UTC timezone in minutes.
- `Date.prototype.getUTCFullYear()` according to universal time.
- `Date.prototype.getUTCMonth()`
- `Date.prototype.getUTCDate()`
- `Date.prototype.getUTCDay()`
- `Date.prototype.getUTCHours()`
- `Date.prototype.getUTCMinutes()`
- `Date.prototype.getUTCSeconds()`
- `Date.prototype.getUTCMilliseconds()`
- `Date.prototype.setFullYear(year[, monthIndex[, date]])` sets year, month, or date according to the local time and returns timestamp. if the arguments are invalid, the dateObject will be set to Invalid Date, and return NaN. If the month or date are out of the expected range, the date object will be updated accordingly.
- `Date.prototype.setMonth(monthIndex[, date])`
- `Date.prototype.setDate(date)`
- `Date.prototype.setHours(hours[, minutes[, seconds[, milliseconds]]])`
- `Date.prototype.setMinutes(minutes[, seconds, milliseconds])`
- `Date.prototype.setSeconds(seconds[, milliseconds])`
- `Date.prototype.setMilliseconds(milliseconds)`
- `Date.prototype.setUTCFullYear(year[, monthIndex[, date]])` according to universal time.
- `Date.prototype.setUTCMonth(monthIndex[, date])`
- `Date.prototype.setUTCDate(date)`
- `Date.prototype.setUTCHours(hours[, minutes[, seconds[, milliseconds]]])`
- `Date.prototype.setUTCMinutes(minutes[, seconds, milliseconds])`
- `Date.prototype.setUTCSeconds(seconds[, milliseconds])`
- `Date.prototype.setUTCMilliseconds(milliseconds)`
- `Date.prototype.toString()` returns a string representing this date interpreted in the local timezone.
- `Date.prototype.toISOString()` returns UTC time formatted as 'YYYY-MM-DDTHH:mm:ss.sssZ' (Zulu time)
- `Date.prototype.toJSON()` same as toIOSString
- `Date.prototype.toUTCString()` returns UTC time formatted as 'Www, dd Mmm yyyy hh:mm:ss GMT'
- `Date.prototype.toDateString()` returns a string representing the date portion of this date interpreted in the local timezone.
- `Date.prototype.toTimeString()` returns a string representing the time portion of this date interpreted in the local timezone.
- `Date.prototype.toLocaleString([locales[, options]])`
- `Date.prototype.toLocaleDateString([locales[, options]])`
- `Date.prototype.toLocaleTimeString([locales[, options]])`
- `Date.prototype.valueOf()` is part of type coercion protocol.

## String

The String object is used to represent and manipulate a sequence of characters.

### String coercion

- Strings returned as-is.
- undefined turns into 'undefined'
- null turns into 'null'
- true to 'true', false to 'false'
- Numbers are converted with the same algorithm as toString(10)
- BigInts same as Numbers
- Symbols throw a TypeError.
- Objects are first converted to a primitive by calling its `[Symbol.toPrimitive]()` with 'string' as hint, toString(), and valueOf() methods, in that order. The resulting primitive is then converted to a string.

#### ways to achieve coercion

- Template literal: `${x}`
- The String() function
- operator +: `'' + x`. Addition coerces the expression to a primitive, which calls `valueOf()` in priority. While template literal and `concat()` coerce the expression to string, which calls `toString()` in priority.

### Static methods

- `String.formCharCode([num, num1, ..., numN])` returns a string. Arguments are integer numbers between 0 to 65535(0xFFFF) representing a UTF-16 code unit. Numbers greater than 0xFFFF are truncated to the last 16 bits. No validity checks are performed.
- `String.formCodePoint([num, num1, ..., numN])` returns a string, Arguments are integer between 0 to 0x10FFFF(inclusive) representing a unicode point. Coerced to number first, not integer or out of range throw RangeError.
- `String.raw(str, str1, ..., strN)` | String.raw`templateString` is a tag function of template literals. Substitutions are processed, but escape sequences (e.g. \n) are not.

### Instance methods

- `String.prototype[Symbol.iterator]()` returns a

### Instance property

- `String: length` returns the length of the string in UTF-16 code units.
