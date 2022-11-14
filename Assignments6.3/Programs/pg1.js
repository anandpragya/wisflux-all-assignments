//1.Write code implementations of arr methods -

const array1 = [1,2,3,4]
let sum = 0;
//a.forEach
array1.forEach((item)=>{
  sum=sum+item;
})
console.log(sum);
//b.map
array2 = array1.map(item=>{
    return item+1
})
console.log(array2);

//c.filter 

array2 = array1.filter(item=> item>2)
console.log(array2);

//d.reduce

array2 = array1.reduce((total,item)=>{
    return total+item;
},50)

console.log(array2);

//e.includes

array2 = array1.includes(4)
console.log(array2);

//f.some

array2 = array1.every(item=>{
    return item>0
})

console.log(array2);

//g.every

array2 = array1.some(item=>{
    return item>3
})
console.log(array2);


