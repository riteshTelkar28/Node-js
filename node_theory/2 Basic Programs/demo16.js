// program showing the concept of timer functions

const myFun1 = ()=>{
    console.log("myFun1 executes");
}
const myFun2 = ()=>{
    console.log("myFun2 executes");
}
const myFun3 = ()=>{
    console.log("myFun3 executes");
}

console.log("Before execution");
    setImmediate(myFun3);
    setInterval(myFun2,3000);
    setTimeout(myFun1,1000);
console.log("After execution");
