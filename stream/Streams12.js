const fs = require("fs");
const fileName = "myfolder/dummy.txt";
const readStream = fs.createReadStream(fileName);

readStream.on('error',(err)=>{
    if(err.code==="ENOENT"){
        console.log("file not exists, so creating it");
        fs.createWriteStream("myfolder/dummy.txt");
    }
})

readStream.on('open',()=>{
    console.log(`file ${fileName} already exists`);
})