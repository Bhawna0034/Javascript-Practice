// Create Promise
// const ticket = new Promise(function(resolve, reject){
//       const isBoarded = false;
//       if(isBoarded){
//         resolve("you are in the flight");
//       }
//       else{
//         reject("your flight has cancelled");
//       }
// })

// Use Promise
// ticket.then((data) => {
//     console.log("wohoo! ", data);
// }).catch((data) => {
//     console.log("oh no! ", data);
// }).finally(() => {
//     console.log("I will always executed");
// })

function getCheeze() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheeze = "🧀";
      resolve(cheeze);
    }, 2000);
  });
}

function makeDough(cheeze) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheeze + "🍩";
      resolve(dough);
    // reject("Bad Cheeze")
    }, 2000);
  });
}

function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      resolve(pizza);
    }, 2000);
  });
}

async function orderPizza() {
  try {
    const cheeze = await getCheeze();
    console.log("here is the cheeze", cheeze);

    const dough = await makeDough(cheeze);
    console.log("here is the dough", dough);

    const pizza = await bakePizza(dough);
    console.log("here is the pizza", pizza);
  } catch (error) {
    console.log("error occured", error);
  }
  console.log("Process Ended");
}
orderPizza();
// getCheeze().then((cheeze) => {
//     console.log("here is the cheeze", cheeze);
//     return makeDough(cheeze);
// }).then((dough) => {
//     console.log("here is the dough", dough);
//     return bakePizza(dough);
// }).then((pizza) => {
//     console.log("here is the pizza", pizza);

// }).catch((data) => {
//     console.log("error occured", data);

// }).finally(() => {
//     console.log("Process ended");
// })
