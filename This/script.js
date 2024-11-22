// const user = {
//     username: "Bhawna",
//     age: 22,
//     welcomeMessage: function(){
//         console.log(`${this.username} , Welcome to the Javascript World!`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();
// user.username = "Hemant";
// user.welcomeMessage();

const chai = function(){
  let username = "Bhawna";
  console.log(this.username);
}

chai();

const pakoda = () =>{
    let username = "Bhawna";
    console.log(this.username);
  }
  
  chai();