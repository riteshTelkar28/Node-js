// Program showing the concept of Events

var events = require("events");
var eventEmitter = new events.EventEmitter();

const myHandlerFunction1 = function(value){
    console.log(value);
};

eventEmitter.on('myCustomEvent',myHandlerFunction1);

eventEmitter.emit('myCustomEvent',"Hello Andrew Anderson");
eventEmitter.emit('myCustomEvent',"Your age is 50 years");

