// program showing the concept of modules

var exampleOne = function firstName(fname){
    // console.log(fname);
    process.stdout.write(fname);
}

var exampleTwo = function lastName(lname){
    // console.log(lname);
    process.stdout.write(lname);
}

module.exports = {exampleOne,exampleTwo};
//console.log(module.exports);