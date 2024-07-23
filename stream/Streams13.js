//flow :- first 'on' method with 'open' event will the file
// second the filenames will go to the array after spliting
// third we call a function readData() which takes filenames a parameter and performs read operation on it

const fs = require("fs");
var arr=[];

const readStream = fs.createReadStream("myfolder/dummy.txt",'utf-8');

readStream.on('open',()=>{
    console.log("file is going to open ....");
})

readStream.on('data',(chunk)=>{
    arr = chunk.split("\n").filter(line=> line!=='');
    console.log(arr);
})

readStream.on('end',()=>{
    for(var filename of arr){
        readData(filename);
    }
})

function readData(filename){
    var readStream1 = fs.createReadStream(filename,'utf-8');
    readStream1.on('data',(chunk)=>{
        console.log(`${filename} is going to read`);
        console.log(chunk);
        console.log("------------------------");
    })
}
