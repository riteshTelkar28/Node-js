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
    console.log(data);
    // response.end();

    var data1 = url.parse(request.url).query;
    console.log(data1);

    var data2 = url.parse(request.url).query;
    console.log(data2);

    response.end();
})


serverInstance.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});

