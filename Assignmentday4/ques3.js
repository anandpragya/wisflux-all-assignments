// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

let a=12,b=30;
let operation = prompt("Enter 'mul' to multiply and 'div' to divide");
switch(operation){
    case "mul": 
    console.log(a*b);
    break;
    case "div":
    console.log(a/b);
    break;
}