// const currentDate = new Date();
// const date1 = new Date(2002, 1 0,10, 7, 30,0);
// console.log(date1);
// console.log(currentDate);

// const body = document.querySelector('body');

// const h2 = document.createElement('h2');
// h2.innerHTML = currentDate;
// h2.innerHTML = date1;
// body.appendChild(h2);

// setTimeout()

setTimeout(() => {
    console.log("This message appears after 3 seconds");
},3000)

// clearTimeout()

let timeout = setTimeout(() => {
    console.log("This will not be logged");
}, 5000);

clearTimeout(timeout);

// setInterval()

// function repeatedFunction(){
//     console.log("This function will be repeated every 1000 miliseconds means 1 second");
// }

// setInterval(repeatedFunction, 1000);

//clearInterval()

let count = 0;
let interval = setInterval(() => {
    count++;
   console.log(count);
},1000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Interval stopped");
}, 5000);

