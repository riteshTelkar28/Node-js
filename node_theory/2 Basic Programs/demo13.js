// program showing the concept of callback

function Employee(){
    this.name = "Andrew Anderson";
    this.age = 67;
    this.address = "Indore";
}
function myFun(displayCallback){
    var obj = new Employee();
    displayCallback(obj);
}
function display(userObj){
    console.log(`Hello ${userObj.name}, Your age is ${userObj.age} and your address is ${userObj.address}`);    
}
myFun(display);