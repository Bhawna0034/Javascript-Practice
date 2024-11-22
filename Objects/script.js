// const myKey = Symbol("key1");
// let JsUser = {
//     email: "Bhawna Sharma",
//     age: 22,
//     qualification: "MCA",

// };

// console.log(JsUser);
// console.log(JsUser["mySymbol"]);
// console.log(JsUser.email);

// console.log(JsUser);

// Object.assign()

let instaUser = [
  accountBhawna = {
    email: "bhawnasharma@gmail.com",
    password: "password",
    privacy: "private",
  },
  profileBhawna = {
    username: "_bhawnaasharma_",
    followers: 367,
    following: 390,
    bio: ["Constantly learning and evolving around the world"],
  },
];

// // console.log("Instagram: ", instaUser1);
// // console.log(instaUser1.account);
// // console.log(instaUser1.profile.username);
// // console.log(instaUser1.profile.bio);

// let instaUser2 = [
//    accountHemant = {
//     email: "hemantsharma@gmail.com",
//     password: "pass",
//     privacy: "public",
//    },
//    profileHemant = {
//     username: "hemant0034",
//     followers: 750,
//     following:450,
//     bio:["Mountain lover"],
//    },
//   ];

// const instaUsers = ["Insta Users: ",...instaUser, ...instaUser2];
// console.log(instaUsers);

// console.log(Object.keys(instaUsers));
// console.log(Object.values(instaUsers));
// console.log(instaUser.hasOwnProperty('bio'));

// let instaUsers = Object.assign( instaUser, instaUser2);
// console.log(instaUsers);

// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "a", 4: "b"};
// const obj3 = {5: "a", 6: "b"};

// const objs = Object.assign({}, obj1, obj2, obj3);
// console.log(objs);

// Spread Operator (...)

// const numberOne = [1, 2];
// const numberTwo = [3, 4];
// const number = [...numberOne, ...numberTwo];
// console.log(number);

//Object destructuring

const course = {
  courseName : "Javascript",
  coursePrice: "4999",
  courseInstructor: "Hitesh Chaudary"
};

const {courseInstructor} = course;
console.log(courseInstructor);

const {courseName} = course;
console.log(courseName);
