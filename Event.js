//Event handlers
function mybutton(){
    console.log("I was clicked");
}

const mouseOver =() => {
    let box2 = document.getElementById('box-2');
    box2.style.backgroundColor = "teal";

}

const keyPressEvent = () => {
    console.log("key was pressed");
}
const keyUpEvent = () => {
    console.log("key up was released");
}

const keyDownEvent = () => {
    console.log("key down was pressed");
}

//Event listeners
const box1 = document.getElementById('box-1');
box1.addEventListener('click', () => {
    console.log('box-1 was clicked');
})

const container = document.getElementById('container');
container.addEventListener('click', () => {
    console.log('container was clicked');
}, true)




const box2 = document.getElementById('box-2');
box2.addEventListener('mouseover', (e) => {
    box2.style.backgroundColor = "teal";
    console.log('eventObject2', e);
})

const nameInput = document.getElementById('nameInput');
// nameInput.addEventListener('keypress', (e) => {
//     console.log('key', e.key);
// })

nameInput.addEventListener('keydown', (e) => {
    console.log('key', e.key);
})

nameInput.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = "teal";
    
})

nameInput.addEventListener('blur', (event) => {
    event.target.style.backgroundColor = " white";
})
