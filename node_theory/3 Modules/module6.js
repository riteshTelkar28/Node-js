// console.log("module.exports : ",module.exports);
// console.log("typeof module.exports : ",typeof module.exports);

var data = {
    protocol : function(protocolName){
        console.log("Protocol Name : ",protocolName);
    },
    domain : function(domainName){
        console.log("Domain Name : ",domainName);
    },
    application : function(applicationName){
        console.log("Application Name : ",applicationName);
    } 
}
module.exports = data;

console.log("module.exports : ",module.exports);
console.log("typeof module.exports : ",typeof module.exports);
