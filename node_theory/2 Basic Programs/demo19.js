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

getUserData(userId).then(function(userObj){
    const DataList = ['Datalist1','Datalist2','Datalist3'];
    const data = {userObj,DataList};
    return data;
}).then(dataValue=>{
    console.log(dataValue);
}).catch(err=>{
    console.log(err);
});
