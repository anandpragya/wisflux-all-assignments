//Write a JavaScript program to get the difference between a given number and 13, 
//if the number is greater than 13 return double the absolutedifference.

let input = prompt("Enter a number");

let diff = 13-input;
console.log(diff);
if(diff<0){
    console.log(Math.abs(2*diff));
}