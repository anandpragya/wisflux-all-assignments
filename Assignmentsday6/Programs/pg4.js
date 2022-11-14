// 4.Sort an array by both ascending and descending order?

const sortedArray = (array)=>{
    console.log(array);
    array.sort((a,b)=>{
        return a-b;
    })
    console.log("Array sorted in ascending order: "+array);
    array.sort((a,b)=>{
        return b-a;
    })
    console.log("Array sorted in descending order: "+array);
}

const array1 = [99,89,2,3,4,1,5,7];
sortedArray(array1);