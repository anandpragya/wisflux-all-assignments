# 1.What are anonymous functions in JavaScript?
Anonymous Function is a function that does not have any name of itself. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

var greet = function () {
    console.log("Welcome to GeeksforGeeks!");
};

An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression. 
greet();

# 2.Explain strict comparison and Abstract comparison in javascript?
console.log(3 == "3"); // true
console.log(3 === "3"); // false.

Double equals is known as the abstract equality comparison operator while triple equals to is termed the strict equality comparison operator. The difference between them :
Abstract equality will try to resolve the data type while making a comparison. Strict equality will return false if the data types are different.

# 3.Difference b/w arrow functions and regular functions?
-ARROW FUNCTIONS
-Syntax :
The syntax of arrow functions:-

let x = (parameters) => {
    // body of the function
};
-arrow functions do not have their own this.
-they can not be constructed using new keyword.

# 4.What is Hoisting in JavaScript?
hoisting allows us to use functions and variables before they're declared.
for ex:
console.log(fool);
var foo;
foo = 'fool';
--this will not throw error but return undefined

This is because at the time of compilation, JavaScript interpreter splits the declaration and assignment of functions and variables and it "hoists" the declarations to the top of their scope before execution.

# 5.JavaScript is a garbage collected programming language, explain how?
Low-level languages require the developer to manually determine at which point in the program the allocated memory is no longer needed and to release it.

Some high-level languages, such as JavaScript, utilize a form of automatic memory management known as garbage collection (GC). The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it. This automatic process is an approximation since the general problem of determining whether or not a specific piece of memory is still needed is undecidable

# 6.Explain Shallow copy vs Deep copy in Javascript?
When we copy a value of one primitive data type to another ,a deep copy is produced.
For ex :var a=23,
      var b =a;
By executing b = a , you make the copy. 
Now, when we reassign a new value to b,only the value of b changes, but no change in a occurs.

But,in case of shallow copy ,like in cases of refernce variables such as objects,both variables will hold the value of same address so change in one will reflect in both the variables.
FOR ex:
const a={
    old:"gold",
    new:"diamond"
}
const b = a;
b.old = "Silver";
console.log(b.old);//Silver
console.log(a.old);//Silver

# 7.What is Object.freeze

The Object.freeze() method freezes an object which prevents any changes or  makes existing properties non-rewritable. A frozen object can no longer be changed:
 -new properties cannot be added, 
 -existing properties cannot be removed, value cannot be changed, and 
 -the object's prototype cannot be re-assigned.

 const obj = {
  age: 42
};

Object.freeze(obj);

obj.age = 33;
// Throws an error in strict mode

console.log(obj.age);
// expected output: 42
