// program showing the concept of events

 var events = require("events");
 var eventEmitter = new events.EventEmitter();
 //console.log(eventEmitter);

 eventEmitter.on('customEvent',function(){
    console.log("This is an example of events in node js");
 });
 
 eventEmitter.emit('customEvent');

