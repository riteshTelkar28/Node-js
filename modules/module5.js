// console.log("module.exports ", module.exports);

// const num = 100;
// module.exports.number = num;

// console.log("module.exports ",typeof module.exports);
var num1 = 100;
var num2 = 100;

module.exports.obj = {a : num1, b : num2};
console.log(typeof module.exports.obj );
