// Program showing the concept of Events

var events = require("events");
var eventEmitter = new events.EventEmitter();

const myHandlerFunction = function(value){
    console.log("This is an example of Custom Event : ",value);
};

eventEmitter.on('myCustomEvent',myHandlerFunction);
eventEmitter.on('myCustomEvent',myHandlerFunction);
eventEmitter.on('myCustomEvent',myHandlerFunction);

eventEmitter.emit('myCustomEvent',1);
eventEmitter.emit('myCustomEvent',2);
eventEmitter.emit('myCustomEvent',3);