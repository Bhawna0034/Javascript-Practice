
// Print 1 to 5 using for loop

// for(let i=1; i<=5; i++){
//     console.log("i: ", i);
// }
// console.log("We are out from the loop");

//Calculate Sum from 1 to 5
// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum+= i;
// }
// console.log("Sum: ", sum);

//Print 1 to 5 using while loop

// let i = 1;
// while(i<=5){
//     console.log("i: ", i);
//     i++;
// }

//Print 1 to 5 using do-white loop

// let count=1;
// do{
//     console.log("i: ", i);
//     count++;
// }while(count<=5);


//for-of loop
// let str = "BhawnaSharma";
// let size = 0;

// for(let i of str){
//     console.log("i: ", i);
//     size++;
// }
// console.log("String's size: ", size);

//for-in loop

let student = {
    name: "Bhawna Sharma",
    class: 7,
    rollno: 22,
    cgpa: 9
};

for(let key in student){
    console.log("key = ", key, " ", "value = ", student[key]);
}
