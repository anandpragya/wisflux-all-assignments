//4.Merge to sets in javascript? (hint use Set class in javascript)

const set1 = new Set(['JOHN','monday']);
const set2 = new Set(['three']);

const set3 = new Set([...set1, ...set2]);
console.log(set3); 