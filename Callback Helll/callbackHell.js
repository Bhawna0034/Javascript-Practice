// console.log('Hello');
// console.log('World');

// setTimeout(function(){
//     console.log('This will write after 3000 seconds');
// }, 3000)

// function getCheeze(callback){
//     setTimeout(() => {
//     const cheeze = "🧀";
//     console.log("here is the cheeze", cheeze);
//     callback(cheeze);

// }, 2000)

// }

// function makeDough(cheeze, callback){
//     setTimeout(() => {
//         const dough = cheeze + "🍩";
//         console.log("here is the dough", dough);
//         callback(dough);
//     }, 2000);
// }

// getCheeze((cheeze) => {
//     makeDough(cheeze, (dough) => {
//         console.log("got my dough", dough);
//     })
// })

// getCheeze((cheeze) => {
//     console.log("got the cheeze");
// })

//Let's make pizza with the help of callback Hell

// pizza -> dough -> cheeze

function getCheeze(callback){
    setTimeout(() => {
        const cheeze = "🧀";
        console.log("here is the cheeze", cheeze);
        callback(cheeze);

    }, 2000);
}

function makeDough(cheeze, callback){
    setTimeout(() => {
        const dough = cheeze + "🍩";
        console.log("here is the dough", dough);
        callback(dough);
    }, 2000);
}

function bakePizza(dough, callback){
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("here is the pizza", pizza);
        callback(pizza);
    }, 2000);
}

getCheeze((cheeze) => {
    // console.log("got the cheeze", cheeze);
    makeDough(cheeze, (dough) => {
        // console.log("got the dough", dough);
        bakePizza(dough, (pizza) => {
            console.log("got the pizza", pizza);

        })
    })
})

// getCheeze((cheeze) =>  {
//     console.log("got the cheeze",cheeze);
// })

// getCheeze((cheeze) => {
//     console.log("got the cheeze", cheeze);
//     makeDough(cheeze, (dough) => {
//         console.log("got the dough", dough);
//     })
// })

