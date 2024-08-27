const { error } = require('console');
var mysql2 = require('mysql2');
var readline = require('readline');

var con = mysql2.createConnection({
    user:'root',
    password:"root",
    host:'localhost',
    port:3306,
    database: "fullstack1"
});

var instance = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


con.connect((error)=>{
    if(error)
        console.log("error occured ");
    else{
        showMenu();
    }
});

function showMenu(){
    instance.question("***********Welcome************\n\nSelect option \n\n1:Insert\n2.Delete\n3.Update\n4.Show \n",(option)=>{
        switch(option){
            case '1':insert();
                    break;
            case '2':Delete();
                    break;
            case '3':update();
                    break;
            case '4':Show();
                    break;
            default:instance.close();
                    con.close();                    
        }
    })
}

function insert(){
    instance.question("Insertion \n enter userName :",(userName)=>{
        instance.question("enter email :",(userEmail)=>{
            instance.question("enter percentage :",(percentage)=>{
                var insertQuery = "insert into student(userName,userEmail,percentage) values (?,?,?)";
                var insertValues = [userName,userEmail,percentage];
                con.query(insertQuery,insertValues,(error,result)=>{
                        if(error)
                            console.log("error");
                        else{
                            console.log("data inserted successfully");
                            showMenu();
                        }
                })
            })
        })
    })
}

function Delete(){
    instance.question("Deletion \n enter user email :",(userEmail)=>{
                var deleteQuery = "delete from student where userEmail = ?";
                var deleteValues = [userEmail];
                con.query(deleteQuery,deleteValues,(error,result)=>{
                        if(error)
                            console.log("error");
                        else{
                            if(result.affectedRows!=0){
                                console.log("data deleted successfully");
                                showMenu();
                            }
                            else{
                                console.log("no records found | please check the email and try again");
                                showMenu();
                            }

                        }
                })
            })

}

function Show(){
    console.log("view data");
    var showQuery = "select * from student";
    con.query(showQuery,(error,result)=>{
        if(error)
            console.log("error");
        else{
            console.table(result);
            showMenu();
        }
    })
}

function update(){
    instance.question("enter email ",(userEmail)=>[
        instance.question("enter  username ",(userName)=>{
            instance.question("enter percentage ",(percentage)=>{
                var updateQuery = "update student set userName = ?, percentage = ? where userEmail = ?"
                var updateValues = [userName,percentage,userEmail];
                con.query(updateQuery,updateValues,(error,result)=>{
                    if(error){
                        console.log("error");
                    }
                    else{
                        console.log("data updated successfully");
                        showMenu();
                    }
            })
            })
        })
    ])
}



