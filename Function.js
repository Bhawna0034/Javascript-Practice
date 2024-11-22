// function mySum(a,b){
//     return a+b;
// }
// let a = 10;
// let b = 5;
// const sum = mySum(a,b);
// console.log(`${a} + ${b} = ${sum}`);


//Adding squares of the two number
function addSquares(a,b){
    function square(num){
        return num*num;
    }
    return square(a) + square(b);
}
console.log(addSquares(2,3)); // 4+9 = 13
console.log(addSquares(3,4)); // 9+16 = 25

//Factorial
// const fact = function(num){
//     return num < 2? 1: num*(fact(num-1));
// }
// console.log(fact(5));

// function myStudent(theObject){
//     theObject.fullName = "Bhawna Sharma";
// }
// const student = {
//   fullName: "Hemant Sharma",
//   field: "IT",
// };

// console.log(student.fullName);
// myStudent(student);
// console.log(student.fullName);

// const square = function(num){
//     return num * num;
// }

// console.log(square(25));

//Sum function
// function sum(a,b){
//   return a+b;
// }

// let add = sum(1,5);
// console.log(add)

//Arrow Function
// const arrowSum = (a,b) => {
//     return a + b;
// }

//ForEach
// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach((val) =>{
//     console.log(val);
// })

//Map Method
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let squareArr = arr.map((val) => {
//     return val ** 2;
// })

// console.log(squareArr);
// console.log(arr);

//Filter Method
// let evenArr = arr.filter((val) => {
//     return val%2 === 0;
// })

// console.log(evenArr);

//Reduce Method
// const output = arr.reduce((prev, next) => {
//     // return res + val;
//     return prev > next? prev: next;
// })

// console.log(output);
