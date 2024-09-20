// 100 Days Of Coding Challenge!

/** Day-55 Task: Read the following Articles and Code along with it:

* Data Types in JavaScript:
https://javascript.info/types

* Interaction: alert, prompt, confirm in JavaScript:
https://javascript.info/alert-prompt-confirm */

//-------------------------------------------------------

// Data Types in JavaScript:

// There are 8 basic data types in JavaScript.

// Seven primitive data types:

/** 
1 number: for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
2 bigint: for integer numbers of arbitrary length.
3 string: for strings. A string may have zero or more characters, there’s no separate single-character type.
4 boolean: for true/false.
5 null: for unknown values – a standalone type that has a single value null.
6 undefined: for unassigned values – a standalone type that has a single value undefined.
7 symbol: for unique identifiers. */

/** one non-primitive data type:
1 object: for more complex data structures. */

// Primitive data types:

/* 1. Number

Example 1: Integer*/

let age = 25;
console.log(age); // 25

// Example 2: Floating-point number

let price = 19.99;
console.log(price); // 19.99

//------------------------------------------

/* 2. BigInt

Example 1:*/

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // 1234567890123456789012345678901234567890n

// Example 2:

let anotherBigNumber = BigInt("1234567890123456789012345678901234567890");
console.log(anotherBigNumber); // 1234567890123456789012345678901234567890n

//----------------------------------------------------------------------------

/* 3. String

Example 1: Single quotes*/

let greeting = "Hello, world!";
console.log(greeting); // "Hello, world!"

// Example 2: Double quotes

let name = "Sylvester";
console.log(name); // "Sylvester"

//----------------------------------------

/* 4. Boolean

Example 1: True*/

let isStudent = true;
console.log(isStudent); // true

// Example 2: False

let isLoggedIn = false;
console.log(isLoggedIn); // false

//---------------------------------------

/* 5. Null

Example 1:*/

let car = null;
console.log(car); // null

// Example 2:

let house = null;
console.log(house); // null

//--------------------------------------

/* 6. Undefined

Example 1:*/

let job;
console.log(job); // undefined

// Example 2:

let salary;
console.log(salary); // undefined

//----------------------------------------

/* 7. Symbol

Example 1:*/

let id = Symbol("id");
console.log(id); // Symbol(id)

// Example 2:

let anotherId = Symbol("id");
console.log(anotherId); // Symbol(id)

//------------------------------------------------------------------------------

// Non Primitive Data Types:

/* 1. Object

Example 1: Simple object*/

let user = {
  name: "Tom",
  age: 30,
};
console.log(user); // { name: "Tom", age: 30 }

// Example 2: Nested object

let company = {
  name: "Tech Corp",
  address: {
    city: "New York",
    zip: "10001",
  },
};
console.log(company); // { name: "Tech Corp", address: { city: "New York", zip: "10001" } }
