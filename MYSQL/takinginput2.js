var readline = require('readline');
var instance = readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);

instance.question("enter num 1 ",(num1)=>{
    // console.log(name);
    instance.question("enter num2 ",(num2)=>{
        // console.log(age);
        var sum = parseInt(num1) + parseInt(num2);
        console.log(sum);
        instance.close();
    })

});