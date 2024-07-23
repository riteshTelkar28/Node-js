// Program showing the concept of Events

var events = require("events");
var eventEmitter = new events.EventEmitter();

const myHandlerFunction1 = function(){
    console.log("This is an example of Custom Event 1");
};
const myHandlerFunction2 = function(){
    console.log("This is an example of Custom Event 2");
};
eventEmitter.on('myCustomEvent',myHandlerFunction1);
eventEmitter.on('myCustomEvent',myHandlerFunction2);

eventEmitter.emit('myCustomEvent');
const listners = eventEmitter.listeners("myCustomEvent");
console.log(listners);
console.log("No. of Listeners : ",listners.length);


