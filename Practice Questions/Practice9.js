//Practice Ques 1
// let marks= [10,24, 35, 45, 23, 80, 93, 35, 91, 92, 67, 90, 99, 56, 98, 100, 89];
// let gradeA = marks.filter((val) => {
//     return val > 90;
// })
// console.log(gradeA);

//Practice Ques 2
let size = prompt("Enter a number: ");
// console.log(size);

let arr = [];
for(let i=1; i<=size; i++){
    arr[i-1] = i;
}
console.log(arr.toString());
 
//Sum of the array
let sum = arr.reduce((prev, next) =>{
    return prev + next;
})

console.log(sum);

//Product of the array
let product = arr.reduce((prev, next) => {
    return prev * next;
})
console.log(product);
