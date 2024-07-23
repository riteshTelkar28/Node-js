// program showing the concept of callback

function sortFun(fruits,callback){
    setTimeout(()=>{
        callback(fruits.sort());
    },2000);
}
function display(sortedNames){
    console.log(sortedNames);
}
var fruits = ["Mango","Apple","Guava","Grapes","Banana"];
sortFun(fruits,display);