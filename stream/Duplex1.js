//duplex allows you to write data from one file to another

const fs = require("fs");

const readStream = fs.createReadStream("file1717769432759.txt",'utf-8');
const writeStream = fs.createWriteStream("newfile.text");
var status = false;

readStream.on('data',(chunk)=>{
    if(chunk)
        status = true;
    else
        status = false;
})

readStream.on('end',()=>{
    if(!status)
        console.log("no data found to transfer");
    else
        console.log("data written");
})
readStream.pipe(writeStream);
