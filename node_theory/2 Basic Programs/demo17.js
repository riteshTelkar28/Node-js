// program showing the concept of promise

function getValue(a,b){
    return new Promise((resolve,reject)=>{
        const c = a+b;
        if(c>=200)
            resolve("Result is greater than or equals to 200");
        else
            reject("Result is lesser than 200");
    });
}
getValue(100,20)
    .then((msg)=>{
        console.log(msg);
    })
    .catch((err)=>{
        console.log(err);
    });