//Array Practice Ques 1
let componies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Remove first Compony
let firstCompony = componies.shift();
console.log(firstCompony);
console.log(componies);

//Remove Uber and Ola in its place
componies.splice(1,1,"Ola");
console.log(componies);

//Add amazon at the end
componies.push("Amazon");
console.log(componies);
