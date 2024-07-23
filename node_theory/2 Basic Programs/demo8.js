// program showing the concept of callback

function message(x,callback){
    console.log(x);
    const y = "Email Sent";
    const print = ()=>{    
        callback(y);
    };
    setTimeout(print,3000);
}
const demo = (msg)=>{
    console.log(msg);
};

message("Task Completed",demo);