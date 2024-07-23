// Example showing the concept of Prototype

function Employee(){
    this.name = "Andrew Anderson"
    console.log("Name : ",this.name);
}
Employee.prototype.display = function(){
    console.log("Name : ",this.name);
}

const obj = new Employee();
obj.display();
console.log("Name : ",obj.name);