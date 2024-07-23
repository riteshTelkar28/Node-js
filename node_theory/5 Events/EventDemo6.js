// Program showing the concept of Events

var events = require("events");
var eventEmitter = new events.EventEmitter();

const myHandlerFunction1 = function(){
    console.log("This is an example of Custom Event 1");
};
const myHandlerFunction2 = function(){
    console.log("This is an example of Custom Event 2");
};
eventEmitter.on('myCustomEvent1',myHandlerFunction1);
eventEmitter.on('myCustomEvent2',myHandlerFunction2);

eventEmitter.emit('myCustomEvent1');
eventEmitter.emit('myCustomEvent2');

const listners1 = eventEmitter.listeners("myCustomEvent1");
console.log(listners1);
console.log("No. of Listeners : ",listners1.length);

const listners2 = eventEmitter.listeners("myCustomEvent2");
console.log(listners2);
console.log("No. of Listeners : ",listners2.length);


