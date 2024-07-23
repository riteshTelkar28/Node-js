const fs = require("fs");
const writeData = fs.createWriteStream("dummy.txt",{flags:'a'});
var data = "it is ritesh here\n";
writeData.write(data);
console.log("data inserted successfully");