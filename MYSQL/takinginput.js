var readline = require('readline');
var instance = readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);

instance.question("enter name ",(name)=>{
    console.log(name);
    instance.question("enter age ",(age)=>{
        console.log(age);
        instance.question("enete salary ",(salary)=>{
            console.log(salary);
            instance.close();
        })
    })

});