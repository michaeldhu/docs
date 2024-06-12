# glossary

## Data types and structure

The latest ECMAScript standard defines eight data types: 7 primitives & object

- Boolean. true and false.
- null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
- undefined. A top-level property whose value is not defined.
- Number. An integer or floating point number. For example: 42 or 3.14159.
- BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
- String. A sequence of characters that represent a text value. For example: "Howdy".
- Symbol. A data type whose instances are unique and immutable.
- Object.

JavaScript is a dynamically typed language. This means you don't have to specify the data type of a variable when you declare it. It also means that data types are automatically converted as-needed during script execution.

## Literals

Literals represent values in JavaScript.

- Array literals
- Boolean literals
- Numeric literals
- Object literals
- RegExp literals
- String literals

## Variable scope

- Global scope: The default scope for all code running in script mode.
- Module scope: The scope for code running in module mode.
- Function scope: The scope created with a function.
- Block scope: The scope created with a pair of curly braces (a block).

const only prevents re-assignments, but doesn't prevent mutations.

## Hosting

- var/let/const hoisting
- function hoisting
- class hoisting
- import hoisting

Hoisting is not a term normatively defined in the ECMAScript specification. The spec does define a group of declarations as [HoistableDeclaration](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-HoistableDeclaration), but this only includes function, function*, async function, and async function* declarations. Hoisting is often considered a feature of var declarations as well, although in a different way. In colloquial terms, any of the following behaviors may be regarded as hoisting:

- Being able to use a variable's value in its scope before the line it is declared. ("**Value hoisting**")
- Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("**Declaration hoisting**")
- The declaration of the variable causes **behavior changes** in its scope before the line in which it is declared.
- The **side effects** of a declaration are produced before evaluating the rest of the code that contains it.

The four function declarations above are hoisted with type 1 behavior; var declaration is hoisted with type 2 behavior; let, const, and class declarations (also collectively called lexical declarations) are hoisted with type 3 behavior; import declarations are hoisted with type 1 and type 4 behavior.

```javascript
const x = 1;
{
  console.log(x); // ReferenceError
  const x = 2;
}
```

## Temporal dead zone (TDZ)

A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the place where the variable is declared and initialized.

The term "temporal" is used because the zone depends on the order of execution (time) rather than the order in which the code is written (position).

Using the `typeof` operator for a let variable in its TDZ will throw a ReferenceError. This differs from using typeof for undeclared variables, and variables that hold a value of undefined.

## Loops

- for
- while
- do while
- for in
- for of
- break
- continue
- **label**

## Functions

### First-class function

Handle functions like any other variables.

### refers to a function

- The function's name
- arguments.callee
- An in-scope variable that refers to the function

