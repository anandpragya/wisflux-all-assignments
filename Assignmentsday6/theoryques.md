# 1.What is JavaScript?
 Javascript is dynamically typed,object-based scripting language mostly used for creating static web pages,mobile applications,etc.It can be used on both client as well as server side.Its code can run only on browser.(require node to run on server).Unlike,other OOPS-based programming language where code is compliled and executed,Js code is interpreted.It was developed in 1997 by Netscape and was earlier known as mocha. 

# 2.What is the differencebetween b/w let and var?
--var: 
It is used to declare variables and redeclaration is allowed.
It has been part of js since the beginning.
It is function-scoped,i.e.,can be accessed from any part of the program.
Variable declared with var keyword are hoisted at the time of code execution,i.e.,you can declare it after and use it before will not throw any error as variable will move at the top of their scope regardless of declaration. 

--let
Redeclaration is not allowed.
It is introduced in Esmascript2015.
It is block-scoped,i.e.,can not access outside its block.
No hoisting occurs.

# 3.Why do we prefer const over var?
To prevent any redeclaration(accidental) of a variable.Const binds the variable so u cannot mutate it but the object of the variable can be updated anytime.
const code ="Pragya";
code = "sattu"  ----(this will throw error)

# 4.What is the use of javascript in web browsers?
Web browser have internal engines to execute the javascript code to create interactive web pages with the help of dom manipulation in both server and client-side.

# 5.What are Objects?
In javascipt,object is a reference data type which stores values in form of key-value pairs.
It can contain both properties and methods.
It can be a collection of primitive data types.
Ex:
const obj1= {
    firstname : "radha",
    lastname= :"singh",
    printname : function(){
        console.log(radha),
    }
} 

# 6.What is an array and how is it different from an Object in Javascript?
Array is also an object in javascript but it stores data in sequential manner.They can be accessed with their respective indices unlike objects where key name is used.Indexing in js starts from 0.

# 7.What is a function?
Like any other programming language,function in javasript is piece of code which takes input parameters,do the task and produce and output.They promotes the concept of DRY(DO NOT REPEAT) of programming.In javascript,function can be declared using function keyword or arrow function can also be used.
ex: function myname(){
    console.log("ganesh")
}
arrow functons
const myname = ()=>{
     console.log("ganesh")
}

# 8.How can we implement call by value and call by reference in Javascript?
Call by value happens when copy of the value of one variable is passed to another variable or function.
ex :var a=23;
let b=a;
a=a+10;
console.log(a);//output 33
console.log(b);// output 23
In this case,copy of a is made and if any change in a is made will not be reflevted in b;

Whereas,in call by reference,the address where the variable is stored is passed and no copy is created.
const array1=[2,3,4]
const array2 = array1; //both arrays are pointing to the same address.
array1.push(5);
console.log(array1);//output 2,3,4,5
console.log(array2);// output 2,3,4,5

# 9.What are the primitive data types in Javascript?
Primitive data types are predefined data types which have no methods or properties of their own.
There are 7 primitive data types:
string.
number.
bigint.
boolean.
undefined.
symbol.
null.

# 10.What is DOM?
DOM stands for document object model which works as an API for HTML document using which we can manipulate our Html pages by creating,deleting,updating processes.It is a part of window object.Javascript is used for Dom manipulation.

# 11.Why do we need DOM?
DOM is used to create,update and remove the style,structure and contents of any HTML or Xml documents.It represents document in form of objcets and nodes for interaction with javascript.