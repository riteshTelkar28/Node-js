// program showing the concept of callback

function message(x,callback){
    const y = setInterval(()=>{
        console.log(x--);
        if(x==0){
            clearInterval(y);
            callback("Time's Up");
        }
    },1000);
}
function alert(msg){
    console.log(msg);
}
message(10,alert);