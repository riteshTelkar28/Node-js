// program showing the concept of callback
function display(numbers,callback){
    if(numbers.length==0){
        callback("No Element Found",null);
    }else{
        const res = numbers.reduce((initial,argument)=>{
            //console.log("initial : "+initial+" argument : "+argument);
            return initial + argument;
        });
        callback(res,true);
    }
}
function myFun(value,err){
    if(!err){
        console.log(value);
    }else{
        console.log("Sum : ",value);
    }
}
// const numbers = [1,2,3,4,5];
const numbers = [];
display(numbers,myFun);