const fs = require("fs");
var obj =[{
    name:"ritesh",
    age:21,
    Address:"dewas"
},
{
    name:"ritesh",
    age:21,
    Address:"dewas"
},
{
    name:"ritesh",
    age:21,
    Address:"dewas"
}
]

const writeData = fs.createWriteStream("myfolder/dummy.txt");
var dataToWrite = JSON.stringify(obj);
writeData.write(dataToWrite);
console.log("data inserted successfully");

