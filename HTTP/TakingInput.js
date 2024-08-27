const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
// const { error } = require('console');

const PORT = 4000;
const code = 200;
const config = {
    'content-type':'text/html'
}

var serverInstance = http.createServer((req,res)=>{
    res.writeHead(code,config);
    var requestedUrl = url.parse(req.url).pathname;    
    if(requestedUrl=='' || requestedUrl=='/' || requestedUrl=='/home'){
        fs.readFile('home.html',(error,data)=>{
            if(error){
                console.log(error);
            }
            else{
                res.write(data);
                res.end();
            }
        });
    }
    else if(requestedUrl=='/registerPost'){
        fs.readFile('register.html',(error,data)=>{
            if(error)
                console.log(error);
            else{
                res.write(data);
                res.end();
            }
        })
    }
    // all this is to done when method is post 
    else if(requestedUrl=='/viewDetails'){
        var chunkData =''; 
        req.on('data',(chunk)=>{
            chunkData += chunk;
        })


        // var data = url.parse(req.url,true).query;
        req.on('end',()=>{
            var data = qs.parse(chunkData)
            res.write("<br>User name :"+data.username);
            res.write("<br>User email :"+data.email);
            res.write("<br>User name :"+data.password);
            res.end();           
        })

}
});
serverInstance.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});

