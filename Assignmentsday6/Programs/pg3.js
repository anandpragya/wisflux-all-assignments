// 3.Print the fibonacci sequence?

const num = parseInt(prompt('Enter the number of terms in fibonacci: '));
let n1 = 0, n2 = 1, nextValue;

console.log('Fibonacci Series:');

for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextValue = n1 + n2;
    n1 = n2;
    n2 = nextValue;
}