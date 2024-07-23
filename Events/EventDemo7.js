// Program showing the concept of Events

var events = require("events");
var eventEmitter = new events.EventEmitter();

const myHandlerFunction1 = function(){
    console.log("This is an example of Custom Event 1");
};
const myHandlerFunction2 = function(){
    console.log("This is an example of Custom Event 2");
};
eventEmitter.addListener('myCustomEvent1',myHandlerFunction1);
eventEmitter.addListener('myCustomEvent2',myHandlerFunction2);

eventEmitter.emit('myCustomEvent1');
eventEmitter.emit('myCustomEvent2');

const listners1 = eventEmitter.listeners("myCustomEvent1");
console.log(listners1);
console.log("No. of Listeners : ",listners1.length);

//eventEmitter.removeListener("myCustomEvent1",myHandlerFunction1);
eventEmitter.off("myCustomEvent1",myHandlerFunction1);

const listners2 = eventEmitter.listeners("myCustomEvent1");
console.log(listners2);
console.log("No. of Listeners : ",listners2.length);
