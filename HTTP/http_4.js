const http = require('http');
const fs = require('fs');
const PORT = 4000;
const code = 200;
const config = {
    'content-type':'text/html'
}

var serverInstance = http.createServer((req,res)=>{
    res.writeHead(code,config);    
    fs.readFile('hello.html',(error,data)=>{
        if(error)
            console.log("error occured");
        else{
            res.write(data);
            res.end(); 
        }

    })  
    // res.end();  it will run first as the readfile is a asynchronous process
});

serverInstance.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});

