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

`undefined` is only a variable of global scope, thus you can use undefined as an identifier in any other scope, but don't do this anyway.

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
- `Object.create(proto, propDescriptorsObj)` creates a new object using an existing object as the prototype of the newly created object. Return the created object. Throw error if proto is neither null nor an object.
- `Object.defineProperties(obj, propDescriptorsObj)` defines new or modifies existing properties directly on an object. Return the object. propDescriptorsObj is an object contains property descriptors.
- `Object.defineProperty(obj, prop, descriptor)` defines a new property or modifies an existing property directly on an object. Return the object. If configurable was false, then all modifies by using this method would throw a TypeError.
- `Object.entries(obj)` returns an array of a given object's own enumerable string-keyed property key-value pairs. Non-object arguments are coerced to objects. undefined and null can't be coerced to objects and throw a TypeError upfront. Only strings may have own enumerable properties,while all other primitives return an empty array.
- `Object.freeze(obj)` freezes an object that prevents extensions and makes existing properties non-writeable and non-configurable. Freeze is shallow. Return the same object. In strict mode any modify of a frozen object will cause a TypeError. Freezing a non-empty TypedArray or DataView will also cause a TypeError. Private properties do not have the concept of property descriptors, which means private properties of an frozen object still can be changed.
- `Object.fromEntries(iterable)` transforms a list of key-value pairs(iterable) into an object. Return a new object. Iterable should be two-element array-like object. It performs the reverse of `Object.entries()`, except that `Object.entries()` only returns string-keyed properties, while `Object.fromEntries()` can also create symbol-keyed properties.
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

- `Object.prototype.hasOwnProperty(prop)` returns a boolean indicates whether the object has the specific property as it's own property. No checking for prototype chain. Be careful about null-prototype object and overridden of hasOwnProperty.
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

TypeError represents an error when an operation could not be performed, typically when a value is not of the expected type.

```javascript

null.fn();

```

## URIError

URIError represents an error when a global URI handling function was used in a wrong way.

```javascript

decodeURIComponent('%')

```

## Number

Number values represent floating-point number like 77 or -7.7. Number type is a [double-precision 64-bit binary format IEEE-754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format). Sign bit: 1 bit, Exponent: 11 bits, Mantissa: 52 bits.

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

The String object is used to represent and manipulate a sequence of characters. Strings are represented fundamentally as sequences of UTF-16 code units. This character set is called the basic multilingual plane(BMP), and includes the most common characters. Each code unit can be written in a string with `\u` followed by exactly four hex digits.


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
- `String.formCodePoint([num, num1, ..., numN])` returns a string, Arguments are integer between 0 to 0x10FFFF(inclusive) representing a unicode point, that is to say may be tow code represent one character. Coerced to number first, not integer or out of range throw RangeError.
- `String.raw(str, str1, ..., strN)` | String.raw`templateString` is a tag function of template literals. Substitutions are processed, but escape sequences (e.g. \n) are not.

### Instance methods

- `String.prototype[Symbol.iterator]()` returns a iterator that yields the **Unicode code points** of the string value as individual strings.
- `String.prototype.at(idx)` returns a new string contains the single UTF-16 code unit located at the specified offset, for out of range returns `undefined`. Position and negative idx are supported. negative idx counting back from the end of the string. e.g `'😆'.at(-1) '\uDE06'`
- `String.prototype.charAt(idx)` returns as at(), but not support negative idx, and out of range returns an empty string. e.g `'😆'.charAt(1) '\uDE06'`
- `String.prototype.charCodeAt(idx)` returns a integer between 0 and 65535 representing the UTF-16 code unit in the specific index. returns `NaN` if out of range. Only gets lone surrogate for char code greater than 65535. e.g `'😆'.charCodeAt(0) 55357`
- `String.prototype.codePointAt(idx)` returns a non-negative integer that is the Unicode code point value of the character starting at the given index. At leading surrogate returns the code point of the surrogates pair. At trailing surrogate, returns only the trailing surrogate code unit. Out of range returns `NaN`. Note the index is still based on UTF-16 code units not Unicode code points. e.g `'😆'.codePointAt(0) 128518`
- `String.prototype.concat([str, str1, ..., strN])` returns a new string containing the combined text of the strings provided. Same to string concatenation operation (+, +=), expect concat coerces its arguments directly to strings, while concatenation coerces its operands to primitives first.
- `String.prototype.startsWith(searchString, position)` determines whether the string starts with the searchString. Regex searchString throw TypeError. Negative position allowed.
- `String.prototype.endsWith(searchString, endPosition)` same as startsWith, but at end.
- `String.prototype.includes(searchString, position)` same as startsWith, but include.
- `String.prototype.indexOf(searchString, position)` same but returns the index of first occurrence. Regexes are allowed but coerced to string.
- `String.prototype.lastIndexOf(searchString, position)`
- `String.prototype.search(regex)` returns the first match index. Non-regex coerced to regex by `new RegExp(regex)`. G flag has no effect on result.
- `String.prototype.isWellFormed()` returns true if this string does not contain any lone surrogates, false otherwise. Checking for avoiding error in encodeURI.
- `String.prototype.toWellFormed()` returns a new string with all lone surrogates replaced with the Unicode replacement character.
- `String.prototype.match(regex)` returns an array whose contents depend on the presence or absence of the global(g) flag or null if no matches are found. Without g flag, only the first complete match and its related computing groups are returned that is same as the result of `RegExp.prototype.exec()`. With g flag, all complete match are returned, but including computing groups. example for groups `/(?<animal>fox|cat) jumps over/`
- `String.prototype.matchAll(regex)` returns an iterable iterator object of matches or an empty iterator if no matches are found. Each value yielded by the iterator is an array with the same shape as the return value of `RegExp.prototype.exec()`. Flag g is required or TypeError thrown. Better accessing to capturing the computing groups than match. To match all with exec, a while loop is needed to manipulating matches. Non-regex objects that implement `[Symbol.matchAll]()` can be consumed by matchAll.
- `String.prototype.padEnd(targetLength, padString)` pads this string with a given string, so that the resulting string reaches the given length, and returns the padded string.
- `String.prototype.padStart(targetLength, padString)`, same. Fixed length number string conversion.
- `String.prototype.repeat(count)` returns a new string containing the specified count copies of the given string. Negative count or overflows maximum string length throw RangeError.
- `String.prototype.replace(pattern, replacement)` returns a new string with the first match replaced. Pattern can be a string, or an object with a Symbol.replace method -- the typical example is Regex. Other type will be coerced to string. Replacement can be a string or function. As string has patterns: $$, $&, $`, $', $n, $<Name>. As function with signature ```function replacer(match, p1, p2, …, pN, offset, string, groups) {}```.
- `String.prototype.replaceAll(pattern, replacement)` same as replace, but with all matches replaced. Regex should has g flag, or TypeError thrown.
- `String.prototype.slice(idxStart[, idxEnd])` returns substring between the range. Negative index is allowed. NaN is treated as 0.
- `String.prototype.substring(idxStart[, idxEnd])` same, except that negative indexes are treated as 0, and if idxStart is bigger than idxEnd, the method swipes the two arguments.
- `String.prototype.split(separator[, limit])` returns an array of strings, split at each point where the separator occurs in the string, with a limit of array length. Separator can be undefined, string, object with `[Symbol.split]()` method, other objects coerced to strings. Undefined separator returns an array with the calling string as a single element. `''` empty string split the string by UTF-16 code units.
- `String.prototype.trim()` removes whitespace from both ends of this string and returns the new string.
- `String.prototype.trimStart()`
- `String.prototype.trimEnd()`
- `String.prototype.toUpperCase()`
- `String.prototype.toLowerCase()`
- `String.prototype.toLocaleUpperCase()`
- `String.prototype.toLocaleLowerCase()`
- `String.prototype.localeCompare(compareString[, locale[, options]])`
- `String.prototype.normalize([form])` returns a string containing the Unicode normalization from of the given string. `form` values are `NFC`(default), `NFD`, `NFKC`, `NFKD`, non of these throw RangeError. Some characters may have two forms of Unicode code point, which may cause problem in string comparison, then this method is needed.
- `String.prototype.toString()`
- `String.prototype.valueOf()`

### Instance property

- `String: length` returns the length of the string in UTF-16 code units.

### Demos

```javascript

function replacer(match, p1, p2, p3, offset, string) {
  // p1 is non-digits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%

```

## RegExp

The RegExp is used to match string with a pattern.

### Instance methods

- `RegExp.prototype[Symbol.match]()`
- `RegExp.prototype[Symbol.matchAll]()`
- `RegExp.prototype[Symbol.split]()`
- `RegExp.prototype[Symbol.replace]()`
- `RegExp.prototype[Symbol.search]()`
- `RegExp.prototype.exec(str)` executes a search with this regex for a match in the specific string returns a result arrays with match and computing groups: index, input, groups, indices(d flag is set). Returns null if non-match. With the global or the sticky flag set, the regex is stateful, it stores a lastIndex from the previous match. This method is a primitive method of RegExp, and others may call it.
- `RegExp.prototype.test()`
- `RegExp.prototype.toString()`

### Instance properties

- `RegExp.prototype.dotAll` whether s flag is set. If set then using `.` to match newline, e.g `\n`.
- `RegExp.prototype.flags` returns all flag as a string.
- `RegExp.prototype.global` whether g flag is set.
- `RegExp.prototype.hasIndices` whether d flag is set.
- `RegExp.prototype.ignoreCase` whether i flag is set.
- `RegExp.prototype.multiline` whether m flag is set.
- `RegExp.prototype.sticky` whether y flag is set. Y flag indicates only match at the index indicated by lastIndex.
- `RegExp.prototype.unicode` whether u flag is set. U flag indicates match as unicode, or \u is equivalent as u. Surrogate pairs will be interpreted as whole character instead of two characters. LastIndex also advanced by Unicode code points instead of UTF-16 code units.
- `RegExp.prototype.unicodeSets` whether v flag is set. Upgrading of u flag. Both u v set turns out SyntaxError.
- `RegExp.prototype.source` returns a string containing the source text of the regex.
- `RegExp: lastIndex` specifics the index at witch to start next match.

## Array

Array methods are always generic. This means that they can be invoked on array-liked objects as well.

```javascript

[]

new Array([element1, element2, /* …, */ elementN])
new Array(arrayLength)

Array([element1, element2, /* …, */ elementN])
Array(arrayLength)

```

For constructor only one number argument but non-length value thrown RangeError.

### Static methods

- `Array.from(arrayLike[, mapFn[, thisArg]])` creates a new shallow-copied array from an iterable(e.g Map, Set) or array-like(object with length and integer-keyed properties) object. The mapFn's signature is `function mapFn(element, index){}`. ThisArg is for mapFn. Returns a new array.
- `Array.fromAsync(arrayLike[, mapFn[, thisArg]])` creates a new shallow-copied array from a async iterable, iterable, or array-like object. Returns a promise whose fulfillment value is an new array instance. This method is almost equivalent to Array.from in terms of behavior, except the following:
  - Array.fromAsync() handles async iterable objects.
  - Array.fromAsync() returns a Promise that fulfills to the array instance.
  - If Array.fromAsync() is called with a non-async iterable object, each element to be added to the array is first awaited.
  - If a mapFn is provided, its input and output are internally awaited.
  Array.fromAsync() and Promise.all() can both turn an iterable of promises into a promise of an array. However, there are two key differences:
  - Array.fromAsync() awaits each value yielded from the object sequentially. Promise.all() awaits all values concurrently.
  - Array.fromAsync() iterates the iterable lazily, and doesn't retrieve the next value until the current one is settled. Promise.all() retrieves all values in advance and awaits them all.
- `Array.isArray(value)`
- `Array.of([ele, ele1, ..., eleN])`

### Instances methods

- `Array.prototype[@@iterator]()` implements the iterable protocol and allows arrays to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an array iterator object that yields the value of each index in the array.
- `Array.prototype.at(index)` returns matched element at the give index. Out of range of length returns `undefined` with any further ado. Same as literal notation `arr[idx]`.
- `Array.prototype.concat([value, value1, ..., valueN])` concatenates into one new array with shallow-copy. Value is array or any type of data.
- `Array.prototype.copyWithin(target, start[, end])` shallow copies part of this array to the target location in the same array without length modified, returns the same modified array. Negative position allowed.
- `Array.prototype.fill(value[, start[, end]])` changes all elements within a range of indices in an array to a static value. Returns the same modified array.
- `Array.prototype.entries()` returns a new iterable iterator object that contains the key-value pairs. When used on sparse arrays, iterators empty slots as if they have value of `undefined`.
- `Array.prototype.keys()` same.
- `Array.prototype.values()` same.
- `Array.prototype.every(testFn[, thisArg])` tests whether all elements pass the testFn. Returns boolean value. The signature of the testFn is `function testFn(ele, idx, arr){}`. Not invoked for empty slots in sparse array. For empty arrays returns true.
- `Array.prototype.some(textFn[, thisArg])` same, but at least one of the elements passed returns true.
- `Array.prototype.find(testFn[, thisArg])` returns the first element passed the testFn. Otherwise, undefined is returned.
- `Array.prototype.findIndex(testFn[, thisArg])` same, but returns index.
- `Array.prototype.findLast(testFn[, thisArg])` iterates the array in reverse order and returns the first element passed the testFn.
- `Array.prototype.findLastIndex(testFn[, thisArg])` same, but returns index.
- `Array.prototype.filter(testFn[, thisArg])` returns a shallow copy of the given array containing just the elements passed the test.
- `Array.prototype.flat([depth])` returns a new array with all sub-array elements concatenated into it recursively up to the specific depth, default is 1.
- `Array.prototype.flatMap(fn[, thisArg])`returns a new array formed by applying the give fn function to each element of the array, and then flatten the array by one level.
- `Array.prototype.forEach(fn[, thisArg])` executes the fn for each element once. Returns `undefined`.
- `Array.prototype.map(fn[, thisArg])` returns a new array from the result of invoking fn on each element.
- `Array.prototype.includes(searchEle[, fromIdx])` compares search element to each element using the SameValueZero algorithm.
- `Array.prototype.indexOf(searchEle[, fromIdx])`return index.
- `Array.prototype.lastIndexOf(searchEle[, fromIdx])`return index.
- `Array.prototype.join([separator])` returns a string by concatenating all of the elements in this array, separated by comma or the specified separator string. If the array has only one single element, the element will be returned as string without using the separator. Elements with null or undefined value or empty slots are converted to empty strings.
- `Array.prototype.pop()` removes the last element, and returns the element, `undefined` for empty array.
- `Array.prototype.push([ele, ele1, ..., eleN])` adds the specified elements to the array, and returns the new length of the array.
- `Array.prototype.shift()` same as pop, but the first element.
- `Array.prototype.unShift([ele, ele1, ..., eleN])` same as push, but at the beginning.
- `Array.prototype.reduce(reducerFn[, initialValue])` returns the value that results form running the reducerFn over the entire array. The signature of reducerFn is `function reducerFn(accumulator, currentValue, currentIndex, value){}`. If initialValue is specified, the reducerFn is executing with the first element of the array as currentValue, and accumulator initialized with the initialValue. Otherwise, the reducerFn is executing with the second element of the array as currentValue, and accumulator initialized with the first element.
- `Array.prototype.reduceRight(reducerFn[, initialValue])` same, but reduce from right to left.
- `Array.prototype.reverse()` reverses an array **in place**, returns the same array reversed.
- `Array.prototype.toReversed()` same, but return a shallow copy and reversed array.
- `Array.prototype.sort([compareFn])` sorts **in place**, returns the same array sorted. CompareFn gets two arguments a and b as conventional, and returns negative value for a should come before b, positive value for a should come after b, zero or NaN for a equals b.
- `Array.prototype.toSorted([compareFn])` same, but returns a shallow copy and sorted array.
- `Array.prototype.slice([start, end])` returns a new array containing shallow copy of elements between the range. Negative integer allowed.
- `Array.prototype.splice(start[, deleteCount[, addingItem, addingItem1, ..., addingItemN]])` changes the contents of an array by removing or replacing and/or adding new elements **in place**. Returns a new array of deleted elements.
- `Array.prototype.toSpliced(start[, deleteCount[,]])` same, but returns the shallow copy and modified array.
- `Array.prototype.with(idx, value)` is the copying version of bracket notation to change the element value at the given index. Returns a new shallow copy and updated array.
- `Array.prototype.toString()` calls join with separator as default internally, and returns the joined string.
- `Array.prototype.toLocaleString()`

### Instances properties

- `Array: length` represents the number of elements in the array, a 32-bit integer. Set length will update the array.

## TypedArray

Almost same as Array. Except

### Static properties

- `TypedArray.BYTES_PER_ELEMENT`

### Instances properties

- `TypedArray.prototype.buffer` returns the ArrayBuffer or SharedArrayBuffer.
- `TypedArray.prototype.byteLength` length in bytes.
- `TypedArray.prototype.byteOffset` offset of the start of the buffer in bytes
- `TypedArray.prototype.length` length in element.

### Demos

```javascript

new Int8Array()
new Int8Array(length)
new Int8Array(typedArray)
new Int8Array(object)

new Int8Array(buffer)
new Int8Array(buffer, byteOffset)
new Int8Array(buffer, byteOffset, length)

```

## Map

The Map object holds key-value pairs and remembers the original order of the keys. Any value may be used as either a key or a value.

### Static methods

- `Map.groupBy(items, groupFn)` returns a Map whose key is the value returned by groupFn, items have same return of groupFn concatenates to an array as value.

### Instance methods

- `Map.prototype[@@iterator]()`
- `Map.prototype.clear()` removes all elements from this map.
- `Map.prototype.delete(key)` removes the specified element from this map by key.
- `Map.prototype.entries()` returns a iterable iterator object yielding key/value pairs as two-item array.
- `Map.prototype.keys()` returns a iterable iterator object yielding each key of the map.
- `Map.prototype.values()` returns a iterable iterator object yielding each value to the map.
- `Map.prototype.forEach(fn[, thisArg])` executes the give function once per key/value pair in this map, in insertion order.
- `Map.prototype.set(key, value)` sets or updates an element in this map with a specific key and a value.
- `Map.prototype.get(key)` get value from this map with the specific key.
- `Map.prototype.has(key)` determines whether an element with the specific key exists in this map.

### Instance properties

- `Map.prototype.size` returns the number of elements in this map.

## Set

The Set object stores **unique** values of any type. Value Equality is based on the SameValueZero algorithm.

### Instance methods

- `Set.prototype[@@iterator]()`
- `Set.prototype.add(value)` inserts new element in this set.
- `Set.prototype.delete(value)` removes a specific element in this set.
- `Set.prototype.clear()` removes all elements in this set.
- `Set.prototype.entries()` returns a iterable iterator object yielding with value/value pairs.
- `Set.prototype.values()` returns a iterable iterator object yielding with value.
- `Set.prototype.keys()` same to values.
- `Set.prototype.forEach(fn[, thisArg])` executes the given fn once for each element in this set, in insertion order.
- `Set.prototype.has(value)` determines whether an element with the specific value exists in this set.
- `Set.prototype.

### Instance properties

- `Set.prototype.size` returns the number of elements in this map.

## WeekMap

WeekMap is almost same as Map, except its keys must be object or non-registered symbols, and does not create strong reference to its key, that is to say, the keys do not prevent from being garbage collected.

### Instance Methods

- `WeekMap.prototype.set()`
- `WeekMap.prototype.get()`
- `WeekMap.prototype.delete()`
- `WeekMap.prototype.has()`

## WeekSet

Same as weekMap

### Instance Methods

- `WeekSet.prototype.add()`
- `WeekSet.prototype.delete()`
- `WeekSet.prototype.has()`

## JSON

The JSON namespace object contains static methods for parsing from and converting value to JavaScript Object Notation(JSON).

### Static methods

- `JSON.parse(text[, reviverFn])` parses a JSON string, returns object. If the string is not valid string, SyntaxError throws.
- `JSON.stringify(value[, replacer[, space]])` converts a JavaScript object to a string. Throw TypeError if circular reference or BigInt encountered.

## Iterator

The Iterator object is an object that conforms to the iterator protocol by providing a next() method that returns an iterator result object.

- `Iterator.prototype[@@iterator]()` makes the Iterator also a iterable object. Returns the value of this.

## AsyncIterator

The AsyncIterator object is an object that conforms to the async iterator protocol by providing a next() method that returns a promise fulfilling to an iterator result object.

- `AsyncIterator.prototype[@@asyncIterator]()` makes the AsyncIterator also a async iterable object. Returns the value of this.

## Promise

The Promise object represents the eventual completion of an asynchronous operation and its resulting value.

A promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected
- fulfilled: the asynchronous operation was completed successfully.
- rejected: the asynchronous was failed.

### constructor

```javascript

new Promise((resolve, reject) => {})

```

### Static methods

- `Promise.all(iterable)` throws TypeError if iterable is not iterable object, returns a promise and its state is as follows:
  - Already fulfilled, if the iterable object is empty.
  - Asynchronously fulfilled, when all the promises in the given iterable fulfill. The fulfillment value is an array of iterable fulfillment values.
  - Asynchronously rejected, when any of the promises in the given iterable rejects. The rejection reason is the rejection reason of the first promise that was rejected.
- `Promise.allSettled(iterable)` returns a promise fulfilled when all promises in the iterable settled (either fulfilled or rejected). The fulfillment value is an array of objects. Each object has the following properties:
  - status: fulfilled or rejected.
  - value: if the promise is fulfilled.
  - reason: if the promise is rejected.
- `Promise.any(iterable)`
  - Already rejected, if the iterable passed is empty.
  - Asynchronously fulfilled, when any of the promises in the given iterable fulfills.
  - Asynchronously rejected, when all of the promises in the given iterable reject. The reject reason is an AggregateError.
- `Promise.race(iterable)` return a promise asynchronously settled when the first of the promises in the iterable settles.
- `Promise.reject(reason)` returns a promise rejected with the given reason.
- `Promise.resolve(value)` returns a promise fulfilled with the given value.
- `Promise.withResolvers()` returns an object containing properties: promise, resolve, reject.

### Instance methods

- `Promise.prototype.then(onFulfilled, onRejected)` returns a new pending promise immediately. OnFulfilled will be executed asynchronously when this promise fulfills, and is called with the fulfilled value as argument. If it is not a function, it is internally replaced with an identity function ((x) => x) which simply passes the fulfillment value forward. OnRejected will be executed asynchronously when this promise rejects, and is called with the rejected reason as argument. If it is not a function, it is internally replaced with a thrower function ((x) => { throw x; }) which throws the rejection reason it received. The new promise (p) state depends on rules as follows:
  - returns a value: p gets fulfilled with the returned value as its value.
  - doesn't return anything: p gets fulfilled with undefined as its value.
  - throws an error: p gets rejected with the thrown error as its value.
  - returns an already fulfilled promise: p gets fulfilled with that promise's value as its value.
  - returns an already rejected promise: p gets rejected with that promise's value as its value.
  - returns another pending promise: p is pending and becomes fulfilled/rejected with that promise's value as its value immediately after that promise becomes fulfilled/rejected.
- `Promise.prototype.catch(onRejected)` returns a new pending promise immediately.
- `Promise.prototype.finally(onFinally)` avoids duplicating code in onFulfilled an onRejected. Returns a new pending promise immediately. The onFinally will be called with no argument. If the onFinally throws an error of returns a rejected promise, the new promise will rejected with that reason. Otherwise, the new promise will settle with the same state as the current promise.
