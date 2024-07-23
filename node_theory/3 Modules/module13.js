// program showing the concept of modules

module.exports = new function Employee(){
    this.name="Andrew Anderson",
    this.age=45,
    this.address={
        city : "Indore",
        state : "Madhya Pradesh",
        country : "India"
    },
    this.greetUser=function(msg){
        console.log(msg);
    }
};
