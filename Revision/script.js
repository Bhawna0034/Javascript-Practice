// Array Methods
// let heroes = ["Spiderman", "Batman", "Ironman", "Hulk", "Thor"];
// for(let hero of heroes){
//     console.log(hero);
// }
// console.log(heroes.pop());
// console.log(heroes.toString());
// console.log(heroes.push("Black Panther"));
// console.log(heroes.toString());
// console.log(heroes.shift());
// console.log(heroes.toString());
// console.log(heroes.unshift("Shaktiman"));
// console.log(heroes.toString());

// let movieHeroes = ["Hritik Roshan", "Shahid Kapoor", "Akshay Kumar"];
// console.log(heroes.concat(movieHeroes));
// console.log(heroes.toString());
// console.log(heroes.slice(0,1));
// console.log(heroes.toString());
// console.log(heroes.splice(0,0,"Spiderman"));
// console.log(heroes.toString());

// // Map 
// let superHeroes = heroes.map((val) => {
//     return val;
// })
// console.log(superHeroes);

// // Filter
// let spiderman = heroes.filter((val) => {
//    return val === 'Spiderman';

// });

// console.log(spiderman);

// // Reduce
// let reduceArray = heroes.reduce((prev, val) => {
//     return prev + " , " + val;
// })
// console.log(reduceArray);



// String Methods
// let str = "Bhawna Sharma";
// for(let i of str){
//     console.log(`i: ${i}`);
// }

// let str2 = "Apna College Student";
// console.log(str2.length);
// console.log(str2.toUpperCase());
// console.log(str2.toLowerCase());
// console.log(str2.trim());
// console.log(str2.slice(5,12));
// console.log(str.concat(str2));
// console.log(str2.replace('A','S'));
// console.log(str2.charAt(0));

// Loop
// let bhawnaCV = {
//     "fullName": "Bhawna Sharma",
//     "qualification": ["BAJMC", "MCA"],
//     "age": 22,
//     "skills": ["HTML", "CSS", "TailwindCSS", "Javascript", "Java", "Spring Boot"],
//     "projects":["ToDesktopClone", "UberClone", "ATM"]
// };

// for(let key in bhawnaCV){
//     const value = bhawnaCV[key];
//     console.log(`${key}: ${value}`)
// }

// Functions
// function myName(){
//     console.log("Bhawna Sharma");
// }

// function myName(name){
//     console.log(`My name is ${name}`);
// }

// Arrow Function
// myName = () => {
//     console.log("Bhawna Sharma");

// }

// myName = (fullname) => {
//     console.log(`fullName: ${fullname}`);
// }

// const sum = (a,b) => {
//     return a+b;
// }

// // myName();
// myName("Bhawna Sharma");
// let add = sum(5,6);
// console.log(add);

// // Callback function
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//     console.log(val);
// })

// DOM
// const div1 = document.querySelector("#div1");
// const p1 = document.querySelector("#p1");
// const para = document.createElement('p');
// const node = document.createTextNode("This is new line which was creating through Javascript");
// para.appendChild(node);
// // div1.appendChild(para);
// div1.insertBefore(para, p1);


// div1.removeChild(para);

// function changeColor(){
//     const pCollections = document.getElementsByTagName('p');
//     for(let i=0; i<pCollections.length; i++){
//         pCollections[i].style.color = 'blue';
//      }

// }

// let students = [
//     {id:"1", name: "Bhawna"},
//     {id: "2", name: "Hemant"},
//     {id: "3", name: "Raavi"},
//     {id: "4", name: "Abeer"},
// ];

// const names = students.map((currentVal, idx, array) => {
//     return `<li>${currentVal.id}</li>`;
// })
// console.log(names);

// const div = document.getElementById('container');
// div.innerHTML = `<ul>${names.join('')}</ul>`

// const course = {
//     "courseName": "Javascript",
//     "price": 999,
//     "courseInstructor": "Hitesh"
// }

// // const {courseInstructor} = course;
// // console.log(courseInstructor);

// const {courseInstructor: instructor} = course;
// console.log(instructor);

let x = "64";
let y = 8;

console.log(x/y);
console.log(x*y);
console.log(x-y);
 







