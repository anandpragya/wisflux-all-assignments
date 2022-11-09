//Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900.
var array = [];
function radomInTwoRange(min1,max1,min2,max2){
 array.push(Math.floor(Math.random() * (max1-min1))+min1) 
 array.push(Math.floor(Math.random() * (max2-min2))+min2)
 return array;
}
    
console.log("TWO RANDOM NUMBERS ARE THE FOLLOWING: "+ radomInTwoRange(-100,0,800,900))
console.log(radomInTwoRange(-100,0,800,900))
   // EgNumbers:-45,-99,876,801,-65,834,-78,888