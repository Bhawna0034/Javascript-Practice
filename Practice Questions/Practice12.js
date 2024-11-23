//Practice Ques 1
let DATA = "Manipal University Jaipur"
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data: ", DATA);
    }
}

// let user1 = new User("Bhawna", "bhawna@gmail.com");
// let user2 = new User("Davity", "davity@gmail.com");


//Practice Ques 2

class Admin extends User{
    editData(){
        console.log("Admin branch");
    }
}

let admin1 = new Admin("Bhawna", "bhawna@gmail.com");