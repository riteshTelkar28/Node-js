const http = require('http');
const PORT = 4000;
const code = 200;
const config = {
    'content-type':'text/html'
}

var serverInstance = http.createServer((req,res)=>{
    res.writeHead(code,config);
    if(req.url=='/' || req.url=='' || req.url=='/home'){
        res.write("<h2>Home page</h2>");
    }
    else if(req.url=='/service')
        res.write("<h2>Services page</h2>");
    else if(req.url=='/about')
        res.write("<h2>about page</h2>");
    else if(req.url=='/login')
        res.write("<h2>login page</h2>");
    else if(req.url=='/contact')
        res.write("<h2>contact page</h2>");

        
});

serverInstance.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});

