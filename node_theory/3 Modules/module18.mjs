// program showing the concept of modules

// named export

var example1 = ()=>{
    console.log("Hello , ");
}

var example2 = ()=>{
    console.log("Andrew Anderson");
}

export const myFun = {example1,example2};