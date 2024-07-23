const http = require("http");
// const PORT = 4000;
var dotenv = require("dotenv");
dotenv.config();
// console.log(http);
var serverInstance = http.createServer((req,res)=>{
    // console.log("server created");
    res.writeHead(200,{'content-type':'text/html'}); //this method allows you to use html in the output 
    res.write("<h1>this is my first example</h1>");
    res.write("my second statement is that i am ritesh telkar and i am from coding thinker")
    res.end(); //tells server that response is ready and we should send it to the client
    // console.log(res);
});

serverInstance.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})
