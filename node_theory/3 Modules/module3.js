// console.log("module.exports : ",module.exports);
// console.log("typeof module.exports : ",typeof module.exports);

// module.exports=function myFun(){
//     console.log("This is an example of Modules in NodeJS");
// };

// module.exports=()=>{
//     console.log("This is an example of Modules in NodeJS");
// };

// const myDemoFun = ()=>{
//     console.log("This is an example of Modules in NodeJS");
// };
// module.exports=myDemoFun;

// const myDemoFun = ()=>{
//     console.log("This is an example of Modules in NodeJS");
// };
// module.exports=myDemoFun(); // gives undefined

const myDemoFun = ()=>{
    return "This is an example of Modules in NodeJS";
};
module.exports=myDemoFun();

// console.log("module.exports : ",module.exports);
// console.log("typeof module.exports : ",typeof module.exports);
