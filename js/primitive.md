# Primitive

## variables

## String

string in JavaScript are immutable in nature i.e once created they couldn't be changed.

In JavaScript, all string methods return a new string.

## Arrays

Let's dive into the learning.

At the core level:

An array is an ordered sequence/collection of items.

and so on and so forth. (fourth) 依此类推

A pair of **square brackets** [] is the literal way to denote an array.

To access array element in JavaScript, we use what's called **bracket notation**.

In general notation,

A big yes!

Let's see a quick example:

Bot indexes and indices are acceptable **plural** forms of the word index. indexes for witting documents, while indices for mathematical.

Syntactically,

### `shift()`

`shift()` removes the first element from an array and **shifts all elements up by one position**.

Akin to sth.

### Sparse array

When `Array()` is called with a single argument of type number, a sparse array is created with that many empty holes/slots. If the number is a float, an error is thrown. `RangeError: Invalid array length`. These empty slots don't have any value at all, not even `undefined`. They are total blank!

When we delete an array element using the `delete` keyword.

### Dense arrays

That is, there is no empty space before, after, or in between the elements; they come one after another.

performance-intensive applications

### mutable

A value is said to be **mutable** if it could be changed in-place.

### dimensions

The dimension of an array is the number of times you have to specify an index to reach to a value.

single dimension array

multi-dimension array

### checking for arrays

#### `instanceof`

In an iframe, if you want to check whether an outsider value is an array. Since the outer array is based on the Array object type in it's own execution context.

outer-window array check problem

- `push(arr1, arr2, ..., arr4)` mutates the original array and returns the length
- `pop()` mutates the original array and returns the last value.
- `shift()` same as pop but at the start
- `unShift()` same as push but at the start
- `isArray()`
- `concat(arr1, arr2, ..., arrN)` does not modify the original array  (or any other array)
- `fill(value[, start[, end]])` mutates the original array.
- `slice([start[, end]])` the slice() method takes a starting(inclusive) and ending index(exclusive) and returns a copy of the array in that range.
- `splice([index[, deleteCount[, item1[, item2[, ...[, itemN]]]]]])` returns an array of removed items
- `reverse()` in place
- `sort()` in place
- `indexOf(value[, index])`

strict-equality comparison

#### Sparse Array

A sparse array, also known as a holey array, is an array where elements don't exist at contiguous positions; they have empty holes between them.

#### Dense Array

A dense array, also known as packed array, is an array where elements exist at contiguous positions, without any holes in between.

## Functions

### function declarations and expressions

- One is hoisted while the other one is not.
- One is capable of creating anonymous functions while the other is not.

Hoisting refers to the behavior of processing all variable declarations in their respective scopes before any other code is executed.

### IIFEs(Immediately Invoked Function Expression)

An IIFE is a function expression that is invoked immediately, after being defined.

identifiers won't overcrowd the global namespace any longer, the global scope would be clean

### this

When used inside a function, this refers to the object that called the function.

Keep in mind that this idea of `this` resolving down to `window` would hold even when a function is called directly from inside another function. That is, this idea doesn't just hold for functions called in the global scope.

In other JavaScript environments such as web workers or Node.js, instead of window, the global object is self or global respectively, and this neatly points to the respective object, so we don't need to worry about which environment we are in if we are using this.

#### In strict mode

when a function is called directly, not as part of object, its `this` value is set to undefined.

### arity

In mathematics and programming, a function's arity refers to the number of parameters defined in function.

In the case of functions in JavaScript, arity refers to the number of parameters given in the function's definition, excluding default-valued, rest and destructured parameters.

To inspect the arity of given function in JavaScript, we access its `length` property.

### arguments

JavaScript provides an array-like object to all functions, excluding arrow functions.

`arguments` is a local variable created every time a function is called. It points to an **array-like object** that holds the list of all arguments passed into the function.

- arguments.callee
- exotic arguments object
- ordinary arguments object

### rest parameter

### spread operator

The spread operator converts an iterable sequence into a list of arguments.

### Default-valued parameters

boilerplate code

### Closure

A function along with its lexical environment is collectively called a closure.

#### lexical environment

The term 'lexical' simply means 'source code' or in other words, 'relating to the text of a program'.

- dynamically-scoped
- lexically-scoped, statically-scoped

The lexical environment for a function f simply refers to the environment enclosing that function's definition in the source code.

#### [[Scopes]] （[[Environment]]）

name resolution

name collisions

name crowded

#### module design pattern

#### Higher-order functions

A function that takes in a function as argument and/or returns back a function is called a higher-order function.

### free variable

For any given function, its free variables refer to those variables not local to the function.

### Function Recursions

A recursion is to call a function from within itself.

#### Frames and the call stack

The moment a function is called in JavaScript, all the local variables and parameters of the function are created in a new unit commonly referred to as a context, or a frame. This whole unit is alloted space in a special data structure known as the call stack.

### methods

- DRY (Don't Repeat Yourself) principle

#### call

#### apply

#### bind

Bound functions.

A bound function wraps an ordinary JavaScript function object with a given value of this, along with given arguments.

### arrow functions

An arrow function is a conciser way to define an anonymous function, with slightly different semantics as well.

## Objects

An object is an unordered collection of properties.

An object is an unordered collection of key-value pairs.

A property is simply a characteristic, a trait, of an object. It is mainly composed of two parts: a key and a value.

Coming back to the notion of a property in JavaScript, a property whose value is a function object is called a **method**. A method is, thus, simply a property that has a function as its value.

object literal syntax

### comparing

Two objects in JavaScript are compared by their references.

### Checking for a given property

Using the `in` operator

### property descriptor

A property descriptor is an object associated with a property that simply describes the property.

- Data property descriptors
  - A data property is directly associated with a corresponding value.
  - [[Value]]
  - [[Writable]]
- Accessor property descriptors
  - An accessor property is associated with functions that are called when the property is read or written to.
  - [[Get]]
  - [[Set]]
- else
  - [[enumerable]]
  - [[configurable]]

Specifying a property other than the ones shown above on the property descriptor object would simply be ignored.

#### `Object.defineProperty()`

#### enumerable

An enumerable property is one that shows up in a for...in loop.

#### configurable

A configurable property is one that could be deleted and whose attributes could be changed.

### constructor

A constructor in JavaScript is a function that is meant to create, and optionally initialize an object.

Objects in JavaScript may be created via constructors which create objects and then execute code that initializes all or part of them by assigning initial values to their properties.

The overall process of creating the instance is called instantiation.

- A new empty object is created.
- The prototype of this object is set to F.prototype. We'll understand this step much better once we learn about prototypes in the next chapter.
- The [[Call]] internal method of the function is executed with its this set to the object created in step 1.
- The object created in step 1 is returned.

### properties

### methods

### instanceof

### instance

- `proto` -> Object.prototype
- constructor -> Object

### extends

- constructor stealing | constructor borrowing

### Static methods

- Instance property/method
- static property/method

### Calling constructors as functions

- new.target (es6)
- instanceof

### prototype

For a given object o, the object from which o inherits properties is called the prototype of o.

Every object in JavaScript has an internal [[Prototype]] attribute which contains a reference to its prototype.

#### prototype chain

For a given object o, its prototype chain is simply a list of prototypes whose first item is the prototype of o, and any subsequent item is the prototype of the previous item, and the last item is simply null.

#### Property retrieval mechanism

#### property shadowing

For a given object, any property that's defined directly on the object is called its own property.

For a given object, any property that's defined somewhere in its prototype chain, but not on the object itself, is called its inherited property. (shared properties)

#### in

in simply tells us whether a given property is accessible on an object, own or inherited.

## Error

throw try catch finally

### debugging

Debugging is the process of finding and rectifying errors in a computer program.

### Syntax error

means that there is some issue with the grammar of the code. The obvious solution is to look for any invalid symbols, identifiers, statements, and then rewrite them in the proper syntax.

### Semantic error

means that there is some kind of a problem with the meaning (i.e. the semantics) of the code. For example, a code accessing a variable might be syntactically correct, but semantically erroneous by virtue of referring to a non-existent variable.

### Logical error

means that there is a problem in the logic of the program. These errors are typically very difficult to find, since they don't cause any visible error messages.

### eight predefined error

- **Error** — a generic class that represents all errors.
- **SyntaxError** — means that there is a problem in the syntax of the code.
- **TypeError** — means that a value is used in a way in which it can't be used.
- **ReferenceError** — means that a reference to a non-existent value is made.
- **RangeError** — means that a given value is out of range.
- **URIError** — means that a URI-processing function was used in the wrong way.
- **EvalError** — means that a problem was encountered while running the global eval() function.
- **AggregateError** — serves to group multiple errors as thrown in a chain of promises.

### try doesn't entertain syntax errors

A syntax error can be detected right when parsing code, and if one is found, the code shouldn't be executed until that syntactic invalidity is resolved.
