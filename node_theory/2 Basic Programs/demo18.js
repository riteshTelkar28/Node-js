// program showing the concept of promise
var c;
function getValue(a,b){
    return new Promise((resolve,reject)=>{
        c = a+b;
        if(c>=200)
            resolve("Result is greater than or equals to 200");
        else
            reject("Result is lesser than 200");
    });
}
getValue(100,200)
    .then((msg)=>{
        console.log(msg);
        c = c + 100;
        return c;
    })
    .then((value)=>{
        console.log("Modified value : ",value);
    })
    .catch((err)=>{
        console.log(err);
    });