//Average of array nums in Javascript?

const arrayAverage = (array)=>{
    let sum =0;
    let avg =0;
    for(let i=0;i<array.length;i++){
        sum = sum+array[i];
    }
    avg = sum/array.length;
    let wrong = Number.isNaN(avg);//to check if array contains of number only.
    if(wrong){
        return "INVALID INPUT"
    }
    else{
        return avg ;
    }
}

const array1 = [1,2,3,'j'];
console.log("Sum of array is: " +   arrayAverage(array1));
