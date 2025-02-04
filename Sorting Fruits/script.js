let fruits = ["🍎", "🍊", "🍎", "🍎", "🍊"];

let appleShelf = document.querySelector("#apple-shelf");
let orangeShelf = document.querySelector("#orange-shelf");

function sortingFruits(){
    for(let i=0; i<fruits.length; i++){
        if(fruits[i] === "🍎"){
            appleShelf.textContent += fruits[i];
        }
        else{
            orangeShelf.textContent += fruits[i];
        }
    }
}

sortingFruits();