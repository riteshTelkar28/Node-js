var data = require("./module10.js");
//console.log(data);
data.obj.greetUser("Welcome to NodeJS Application");
console.table(data.obj);
console.log("Name : ",data.obj.name);
console.log("Age : ",data.obj.age);
console.log("City : ",data.obj.address.city);
console.log("State : ",data.obj.address.state);
console.log("Country : ",data.obj.address.country);
