// Check whether a number is a Multiple of 5 or not
// let num = prompt("Enter a number: ");
// if(num % 5 == 0){
//     console.log(num, " is a Multiple of 5");
// }
// else{
//     console.log(num, " is not a Multiple of 5");
// }

//Give grades to Students According to their scores
let score = prompt("Enter your score (0-100): ");
let grade;
if(score >= 80 && score <= 100){
    grade = "A";

}
else if(score >= 70 && score <= 79){
    grade = "B";
}
else if(score >= 60 && score <= 69){
    grade = "C";
}
else if(score >= 50 && score <= 59){
    grade = "D";
}
else{
    grade = "F";
}

console.log("Grade: ", grade);

