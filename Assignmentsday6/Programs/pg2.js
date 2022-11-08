// 2.Swap two numbers by reference?

const objectSwap = {
    a:23,
    b:33
}
//before swapping
console.log("before swapping")
console.log("a is : "+objectSwap.a);
console.log("b is : "+objectSwap.b);

const swap = (obj)=>{
    let temp = obj.a;
    obj.a = obj.b;
    obj.b=temp;

    return obj;
}

swap(objectSwap);
//after swapping
console.log("after swapping")
console.log("a is : "+ objectSwap.a);
console.log("b is : "+objectSwap.b);