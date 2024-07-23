// program showing the concept of callback

function myFun(displayCallback){
    var obj = {
        name : "Andrew Anderson",
        age : 67,
        address : "Indore"
    }
    displayCallback(obj);
}
function display(userObj){
    console.log(`Hello ${userObj.name}, Your age is ${userObj.age} and your address is ${userObj.address}`);    
}
myFun(display);