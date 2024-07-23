const http = require("http");
const PORT = 4000;
// console.log(http);
var serverInstance = http.createServer((req,res)=>{
    console.log("server created");
    res.end(); //tells server that response is ready and we should send it to the client
});

serverInstance.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})
