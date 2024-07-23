// program showing the concept of modules

var obj = {
    name : "Andrew Anderson",
    showName : function(receivedName){
        console.log(`Hello ${receivedName}`);
    }
}

module.exports.obj = obj;
