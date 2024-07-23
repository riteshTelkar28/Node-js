const fs = require("fs");
var uniqueId = new Date().getTime();
const filename = `file${uniqueId}.txt`;
const fileToWrite = fs.createWriteStream("myfolder/dummy.txt",{flags:'a'});
var dataToWrite = filename + "\n";
fileToWrite.write(dataToWrite);

const dataInFiles = fs.createWriteStream(filename);
var data = "hello everyone !";
dataInFiles.write(data);
console.log("data  inserted successfully");

