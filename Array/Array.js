// let heroes = ["Spiderman", "Batman", "Ironman", "Hulk", "Thor"];
// console.log(heroes);

// console.log(heroes[0]);
// console.log(heroes[1]);
// console.log(heroes[3]);

// heroes[4] = "Shaktiman";
// console.log(heroes[4]);


// for(let val of heroes){
//     console.log(val);

// }

// let cities = ["Amritsar", "Beas", "Chandigarh", "Meerut", "Delhi", "Yamunanagar"];
// for(let city of cities){
//     console.log(city);
// }

// let foodItems = ["Burger", "Dosa", "Momos", "Noodles", "Munchurian"];
// console.log(foodItems);

// foodItems.push("Soup", "Spring Roll", "FrenchFries");
// console.log(foodItems);

// let deletedItem  =  foodItems.pop();
// console.log("deletedItem = ", deletedItem);

// console.log(foodItems);
// console.log(foodItems.toString());

let starters = ["Spring Roll", "Paneer Tikka", "French Fries"];
let mainCourse = ["Dal Makhni", "Shahi Paneer", "Rajma", "Butter Naan", "Lemon Mushroom"];

let foodItems = starters.concat(mainCourse);
console.log(foodItems.toString());

let val = foodItems.shift();
console.log(val);

val = foodItems.unshift();
console.log(foodItems);

let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,101,101);
console.log(arr.toString());

//Add element
arr.splice(2,0,201);
// console.log(arr.toString());

//Delete element
arr.splice(2, 3);



