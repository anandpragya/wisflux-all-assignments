//2.Explain the properties of the join array method function via program?

const joinArray = (array)=>{
   let result= array.join(',');
    return result;
}

const array1 = ["Joe", "Kevin", "Peter"] 
console.log(joinArray(array1));
// => "Joe, Kevin, Peter" //it joined the whole array into one string