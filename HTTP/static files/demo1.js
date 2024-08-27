// serving static files
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var serverInstance = http.createServer((request,response)=>{
    var requestedUrl = url.parse(request.url,true);
    // console.log(requestedUrl);
    if(requestedUrl.pathname=='/'){
        // console.log("enter ");
        response.writeHead(200,{'content-type':'text/html'});
        var data = fs.readFileSync('home.html');
        response.write(data);
        response.end();
    }
    else if(requestedUrl.pathname.match("\.css$")){
        var style_sheet = path.join(__dirname,request.url);
        console.log(request.url);
        response.writeHead(200,{'content-type':'text/css'});
        var data = fs.createReadStream(style_sheet); // to read data from the file
        data.pipe(response); // readed data is transferred to response
    }
    else if(requestedUrl.pathname.match("\.jpg$")){
        var image = path.join(__dirname,request.url); //joins the directory name and the other parameters
        console.log(image);
        console.log(request.url);
        response.writeHead(200,{'content-type':'image/jpg'});
        var data = fs.createReadStream(image);
        data.pipe(response);
    }
    
})

serverInstance.listen("3000",()=>{
    console.log("server connection established");
})