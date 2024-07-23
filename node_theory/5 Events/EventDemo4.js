// Program showing the concept of Events

var events = require("events");
var eventEmitter = new events.EventEmitter();

const myHandlerFunction = function(){
    console.log("This is an example of Custom Event");
};

eventEmitter.on('myCustomEvent',myHandlerFunction);

eventEmitter.emit('myCustomEvent');