// const myBody = document.body;
// myBody.style.backgroundColor = "beige";
// console.log(myBody);

// const box2 = document.getElementById("box-2");
// console.log(box2);

// const divs = document.getElementsByTagName('div');
// console.log(divs);

// const boxes = document.getElementsByClassName('box');
// console.log(boxes);


// const box1 = document.getElementById("box-1");
// // box1.innerHTML = "Hello World!";
// // box1.innerHTML = "<h1>Hello</h1>";
// box1.style.backgroundColor = "black";
// box1.classList.add("round-border");

// const boxes = document.getElementsByClassName("box");
// for(let i=0; i<boxes.length; i++){
//     boxes[i].classList.add("round-border");
// }

// box1.classList.remove("round-border");

// const newParagraph = document.createElement('p');
// newParagraph.innerText = "I'm creating a new paragraph with the help of the Javascript";

// const container = document.getElementById('container');
// container.appendChild(newParagraph);

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "myClass"));

// let menu = document.getElementById('MenuDiv');
// menu.style.backgroundColor = "blue";

// let newButton = document.createElement("button");
// newButton.innerText = "Click Me!!";
// console.log(newButton);

// let menuDiv = document.getElementById("MenuDiv");
// menuDiv.style.backgroundColor = "blue";


// // menuDiv.append(newButton);

// document.querySelector("MenuDiv").prepend(newButton);

let heading = document.createElement("h1");
heading.innerHTML = "<i> Hello Learners!!</i>";

document.querySelector("body").prepend(heading);

let para = document.querySelector("p");
console.log(para);

heading.remove();