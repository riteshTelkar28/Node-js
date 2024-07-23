// Program showing the concept of Events

var events = require("events");
var eventEmitter = new events.EventEmitter();

const myHandlerFunction1 = function(value){
    console.log(value);
};
const myHandlerFunction2 = function(message){
    console.log(message);
};

eventEmitter.on('myCustomEvent1',myHandlerFunction1);
eventEmitter.on('myCustomEvent2',myHandlerFunction2);

eventEmitter.emit('myCustomEvent1',"Hello Andrew Anderson");
eventEmitter.emit('myCustomEvent2',"Your age is 50 years");

