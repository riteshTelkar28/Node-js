// program showing the concept of callback

function message(x,callback){
    console.log(x);
    const y = "Email Sent";
    setTimeout(()=>{    
      callback(y);
    },3000);
}

message("Task Completed",(msg)=>{
    console.log(msg);
});