// program showing the concept of modules

var obj = {
    name:"Andrew Anderson",
    age : 45,
    address : {
        city : "Indore",
        state : "Madhya Pradesh",
        country : "India"
    },
    greetUser : function(msg){
        console.log(msg);
    }
}
module.exports.obj = obj;
