//Write a JavaScript program to check the total marks of a student in variousexaminations.
// The student will get A+ grade if the total marks are in therange 89..100 inclusive, 
//if the examination is "Final-exam." the student willget A+ grade and total marks
// must be greater than or equal to 90. Returntrue if the student get A+ grade or false otherwise.

const IsStudentAplus = (m1,m2,m3)=>{
    const total = (m1+m2+m3)/3;
    if(total>=90){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

IsStudentAplus(0,90,90);

