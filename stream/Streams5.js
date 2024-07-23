const fs = require("fs");
var uniqueID = new Date().getTime();

const writeData = fs.createWriteStream(`file${uniqueID}.txt`);
var data = "hola folks !";
writeData.write(data)
writeData.close();
writeData.on('finish',()=>{
    console.log("data inserted successfully");
})