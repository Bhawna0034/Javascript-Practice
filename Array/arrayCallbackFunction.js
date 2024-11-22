const arr = [4,2,1, -1, 3, -3, 4, -6, -7];

const firstNeg = (num) => {
    return num<0;
}

console.log(arr.find(firstNeg));

//findIndex
console.log(arr.findIndex(firstNeg));

//forEach
arr.forEach((num, idx) => {
    console.log('array num: ', num, " at index: ", idx);
})