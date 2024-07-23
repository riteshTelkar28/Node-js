const fs = require("fs");
var obj ={
    name:"ritesh",
    age:21,
    Address:"dewas"
}

const writeData = fs.createWriteStream("myfolder/dummy.txt");
writeData.write(JSON.stringify(obj)); //data goes in string form
console.log("data inserted successfully");
