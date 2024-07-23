// program showing the concept of callback

function operation(a,b,operationName,resultCallback){
    var result;
    switch(operationName){
        case 'addition' : result = a+b;
                            break;
        case 'subtraction' : result = a-b;
                            break;
        case 'multiplication' : result = a*b;
                            break;
        case 'division' : result = a/b;
                            break;
        case 'modulus' : result = a%b;
                            break;
    }
    resultCallback(result);
}
function result(output){
    console.log("Result : ",output);
}
operation(100,200,'addition',result);
operation(100,200,'subtraction',result);
operation(100,200,'multiplication',result);
operation(100,200,'division',result);
operation(100,200,'modulus',result);
