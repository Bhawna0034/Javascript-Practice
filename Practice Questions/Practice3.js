// Print all the even numbers from 0 to 100

// for(let i=0; i<=100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//Guess the game number

let gameNum = 25;
let userNum = prompt("Guess the game number: ");

while(userNum != gameNum){
    //game
    userNum = prompt("You have entered wrong number! Guess again: ");
}

console.log("Congratulations you entered the right number");