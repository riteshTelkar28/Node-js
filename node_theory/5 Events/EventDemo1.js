// program showing the concept of events

var events = require("events");
//console.log(events);
//console.log(events.EventEmitter);

//var eventEmitter = new events();
//console.log(eventEmitter);

//  var eventEmitter = new events.EventEmitter();
//  console.log(eventEmitter);

 
var events = require("events").EventEmitter;
console.log(events);
console.log("addAbortListener : ",events.addAbortListener);

