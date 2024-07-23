// Program showing the concept of Events

var events = require("events");
var eventEmitter = new events.EventEmitter();

const myListener = function(){
    console.log("Hello User..!!");
}
eventEmitter.once('customEvent',myListener);

eventEmitter.emit("customEvent");
eventEmitter.emit("customEvent");
eventEmitter.emit("customEvent");