//stack

let firstVar = "popcorn";
let secondVar = firstVar;

secondVar = "pizza";
console.log(firstVar);
console.log(secondVar);

//Heap

const user1 = [
    {email: "bhawnasharma@gmail.com"},
    {password: "password"}

];

const user2 = user1;
user2.email = "hemantsharma@gmail.com"

console.log(user1);
console.log(user2);