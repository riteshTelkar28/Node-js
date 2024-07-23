const fs = require("fs");
fs.mkdir("myfolder",(err)=>{
    if(err.code=='EEXIST'){
        console.log("folder already created");
    }
    else{
        console.log("folder created successfully");
    }
})