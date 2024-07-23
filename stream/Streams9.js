const fs = require("fs");
const readData = fs.createReadStream("myfolder/dummy.txt",'utf-8');
readData.on('data',(data)=>{
    const obj = JSON.parse(data) //we have to parse data in the form of object 
    console.log(obj.name);
})
