// Program showing the concept of Events

var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on('myCustomEvent',function(){
    console.log("This is an example of Custom Event");
});

eventEmitter.emit('myCustomEvent');