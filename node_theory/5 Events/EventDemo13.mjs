// Program showing the concept of Events

import EventEmitter from "events";
class MyEmitter extends EventEmitter{}

var emitter = new MyEmitter();

emitter.on("myCustom Event",function(){
    console.log("Example of class in ES6");
});
emitter.emit("myCustom Event");