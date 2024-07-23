const http = require('http');
const url = require('url');
// const fs = require('fs');
const PORT = 4000;
// const code = 200;
// const config = {
//     'content-type':'text/html'
// }

var serverInstance = http.createServer((request,response)=>{
    var data = url.parse(request.url);
    // console.log(parseInt(data.a) + parseInt(data.b));
    console.log(data);

    response.end();
});


serverInstance.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});

