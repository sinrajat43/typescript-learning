// Square root using Map 
var arr;
arr = [16, 49, 50, 225, 25, 33];
var val = arr.map(Math.sqrt);
console.log(val);
// Odd using Filter
arr = [16, 49, 50, 225, 25, 33];
function isOdd(element, index, array) {
    return (element % 2 == 0);
}
var odd = arr.filter(isOdd);
console.log(odd);
// Sum using Reduce
arr = [16, 49, 50, 225, 25, 33];
function sum1(a, b) {
    return a + b;
}
var sum = arr.reduce(sum1);
console.log(sum);
