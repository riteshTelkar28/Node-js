const http = require('http');
const fs = require('fs');
const url = require('url');
const PORT = 4000;
const code = 200;
const config = {
    'content-type':'text/html'
}

var serverInstance = http.createServer((req,res)=>{
    res.writeHead(code,config);
    var requestedUrl = url.parse(req.url).pathname;  
    console.log(requestedUrl);  
    if(requestedUrl=='' || requestedUrl=='/' || requestedUrl=='/home'){
        fs.readFile('home.html',(error,data)=>{
            if(error){
                console.log(error);
            }
            else{
                res.write(data);
                res.end();
            }
        })
    }
    else if(requestedUrl=='/about'){
        fs.readFile('about.html',(error,data)=>{
            if(error){
                console.log(error);
            }
            else{
                res.write(data);
                res.end();
            }
        })
    }

    else if(requestedUrl=='/services'){
        fs.readFile('services.html',(error,data)=>{
            if(error){
                console.log(error);
            }
            else{
                res.write(data);
                res.end();
            }
        })
    }
    else{
        fs.readFile('PageNotFound.html',(error,data)=>{
            if(error){
                console.log(error);
            }
            else{
                res.write(data);
                res.end();
            }
        })
    }
    // res.end();  it will run first as the readfile is a asynchronous process
});

serverInstance.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});

