//method 1
const calculate = (a,b, operation) => {
    return operation(a,b);
}

const result = calculate(10,5, function(num1, num2){
    return num1 + num2;
})
console.log(result);

//method2
const subtraction = (a,b) => a-b;
const subResult = calculate(10,5, subtraction);
console.log(subResult);

//method3
function multiply(a,b){
    return a*b;
}
const mulResult = calculate(10,5, multiply);
console.log(mulResult);