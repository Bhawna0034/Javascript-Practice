let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let el of marks){
    sum+=el;

}

let avg = sum / marks.length;
console.log("Average of Marks = ", avg);


let items = [250, 645, 300, 900, 50];
// let i = 0;

// for(let val of items){
//     console.log(`value of index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after applying offer index ${i} = ${items[i]}`);
//     i++;
// }

for(let i = 0; i < items.length; i++){
    let offer = items[i]/10;
    items[i]-=offer;

}
console.log(items);

