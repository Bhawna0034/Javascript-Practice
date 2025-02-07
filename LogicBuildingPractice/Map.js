const array = ["hello", "a", "apple", "guava", "harsh", "nishi"];

const newArray = array.map((val) => {
    if(val.length === 5)
        return `<p> ${val}</p>`;
    else
        return `<span>${val}</span>`
})

console.log(newArray);


