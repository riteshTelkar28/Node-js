// Program showing the concept of Events

var events = require("events");
var eventEmitter = new events.EventEmitter();

var dataListener = function(){
    console.log("data listener fires");
}
var errorListener = function(){
    console.log("error listener fires");
}
var endListener = function(){
    console.log("end listener fires");
}
var finishListener = function(){
    console.log("finish listener fires");
}

eventEmitter.on('data',dataListener);
eventEmitter.on('error',errorListener);
eventEmitter.on('end',endListener);
eventEmitter.on('finish',finishListener);

eventEmitter.emit("data");
eventEmitter.emit("error");
eventEmitter.emit("end");
eventEmitter.emit("finish");