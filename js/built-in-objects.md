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

- `Object.assign(target, source1, source2, ..., sourceN)` copies enumerable and own properties from the source object to a target object. Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwritten earlier ones. Return the target object.
- `Object.create(proto, propertiesObject)` creates a new object using an existing object as the prototype of the newly created object. Return the created object. Throw error if proto is neither null nor an object.
- `Object.defineProperties(obj, propDescriptorsObj)` defines new or modifies existing properties directly on an object. Return the object. propDescriptorsObj is an object contains property descriptors.
- `Object.defineProperty(obj, prop, descriptor)` defines a new property or modifies an existing property directly on an object. Return the object.