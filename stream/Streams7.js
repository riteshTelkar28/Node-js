const fs = require("fs");
const readStream = fs.createReadStream("file1717766424581.txt",'utf-8');
readStream.on('data',(data)=>{
    // console.log(data.toString());
    // console.log(data+"");
    console.log(data);
})

readStream.on('open',()=>{
    console.log("reading");
})

readStream.on('end',()=>{
    console.log("closing");
})

