const fs = require("fs");
const readData = fs.createReadStream("myfolder/dummy.txt",'utf-8');
readData.on('data',(data)=>{
    const obj = JSON.parse(data) //we have to parse data in the form of object 
    console.log(obj);
    obj.map((value)=>{
        console.log(value.name);
        console.log(value.age);
        console.log(value.Address);
        // console.log(value.name);
        
    })
})
