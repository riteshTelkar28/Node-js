// program showing the concept of callback

function operation(a,b,callback){
    setTimeout(()=>{
        const add = a+b;
        callback(add);
    },2000);
}

function result(res){
    console.log("Result : ",res);
}
operation(100,200,result);