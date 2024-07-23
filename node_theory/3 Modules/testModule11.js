var data = require("./module11.js");
console.log(data);
data.userDetails.greetUser("Welcome to NodeJS Application");
console.log("Name : ",data.userDetails.name);
console.log("Age : ",data.userDetails.age);
console.log("City : ",data.userDetails.address.city);
console.log("State : ",data.userDetails.address.state);
console.log("Country : ",data.userDetails.address.country);
