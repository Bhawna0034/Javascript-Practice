let fullName = prompt("Enter your FullName: ");
fullName = fullName.toLowerCase();
console.log(fullName);

let userName = "@";
userName = userName.concat(fullName);
console.log(userName);

let size = fullName.length;
userName = userName.concat(size);
console.log(userName);