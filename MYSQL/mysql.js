var mysql2 = require('mysql2');

var con = mysql2.createConnection({
    user:'root',
    password:"root",
    host:'localhost',
    port:3306
});

con.connect((error)=>{
    if(error)
        console.log(error);
    else{
        var createQuery = "create database fullstack1";
        con.query(createQuery,(error,result)=>{
            if(error)
                console.log(error);
            else{
                console.log("result ",result);
                console.log("data base created successfully");
            }
        })
    }
})