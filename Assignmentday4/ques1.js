// Write a JavaScript program to find the area of a triangle where lengths ofthe three of its sides are 5, 6, 7.
function area(a,b,c){
const s =  (a+b+c)/2;
const areaOfTriangle = (s*(s-a)*(s-b)*(s-c))**0.5;
console.log(areaOfTriangle);
}

area(5,6,7);