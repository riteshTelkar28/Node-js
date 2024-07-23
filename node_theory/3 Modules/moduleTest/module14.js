// program showing the concept of modules

const message = {
    msg : "Registration Successfull"
}
const statusCode = {
    success : 200,
    error : 500
}

// default export
//module.exports.data = message;

// named export
//module.exports.data = {message,statusCode};

// named export
module.exports = {message,statusCode};