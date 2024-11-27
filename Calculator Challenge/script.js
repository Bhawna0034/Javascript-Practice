let num1 = 8;
let num2 = 2;

let num1El = document.querySelector("#num1-el");
let num2El = document.querySelector("#num2-el");

let result = document.querySelector("#result");

num1El.textContent = num1;
num2El.textContent = num2;

function add(){
    let sum = num1 + num2;
    result.textContent = result.textContent + sum;
}

function subtract(){
    let sub = num1 - num2;
    result.textContent = result.textContent + sub;

}

function divide(){
    let div = num1 / num2;
    result.textContent = result.textContent + div;
}

function multiply(){
    let mul = num1 * num2;
    result.textContent = result.textContent + mul;
}