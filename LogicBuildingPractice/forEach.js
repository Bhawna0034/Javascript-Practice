// let arr = [1,2,3,4,5];
// arr.forEach(function(val){
//     console.log("Hello World " + val);
// });

//Print only those values of array which is less and equal to 2
// arr.forEach(function(val){
//     if(val <= 2){
//         console.log(val);
//     }
// });

//Sum of all the element of an array
let sum=0;
// arr.forEach(function(val){
//    sum+=val;
// })
// console.log("Sum: " + sum);

//Sum of all element of an array and skip if their type is string
let arr= [1, 2, '3', 4];
arr.forEach(function(val){
    if(typeof val === 'number'){
        sum+=val;
    }
});
console.log(sum);

