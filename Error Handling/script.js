// try{
//     const robot = prompt("Are you a robot?");
//     if(robot == 'Y'){
//         throw new Error("Robot Found");
//     }
// }
// catch(error){
//     console.log(error.name, error.message);
// }

try{
    console.log("before the error");
    console.log(age);
    console.log("after the error");
}
catch(error){
    console.log(error.name, error.message);
}
finally{
    console.log("from finally");
}