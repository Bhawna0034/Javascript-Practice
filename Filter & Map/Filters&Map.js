let students = [
  {id:"01", fullName: "Bhawna Sharma", sports: "Cricket"},
  {id: "02", fullName: "Hemant Sharma", sports: "Football"},
  {id: "03", fullName: "Sarthak Sharma", sports: "Basketball"},
  {id: "04", fullName: "Tamanna Rana", sports: "Vollyball"},
  {id: "05", fullName: "Sanya Sharma", sports: "Badminton"}
];

const evenStudents = students.filter((currentValue) => {
    if(currentValue.id % 2 == 0){
        return true;
    }
    return false;
})

console.log("Even Students: ", evenStudents);

const names = students.map((currentValue) => {
    return `<li>${currentValue.fullName}`;
})

console.log(names);

const div = document.getElementById('container');
div.innerHTML = `<ul>${names.join('')}</ul>`

// console.log(`fullName:  ${names}`);