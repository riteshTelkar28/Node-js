// program showing the concept of promise

const userId = "USER00AB123";
function getUserData(userId){
    return new Promise((resolve,reject)=>{
        const userObj = {
            userId : userId,
            name : "Andrew Anderson"
        }
        resolve(userObj);
    });
}

const myFun = function(userObj){
    const DataList = ['Datalist1','Datalist2','Datalist3'];
    const data = {userObj,DataList};
    return data;
};

getUserData(userId).then(myFun)
.then(dataValue=>{
    console.log(dataValue);
}).catch(err=>{
    console.log(err);
});
