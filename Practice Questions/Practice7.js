//Function Practice Ques 1
function countVowels(str) {
  let count = 0;
  for (let val of str) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u" ||
      val === "A" ||
      val === "E" ||
      val === "I" ||
      val === "O" ||
      val === "U"
    ) {
      count++;
    }
  }
  return count;
}

//Arrow Function Practice Ques 2
const arrowCountVowels = (str) => {
    let count = 0;
    for(let char of str){
        if(char == 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
            count++;
        }
    }
    return count;
}


