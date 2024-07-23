// program showing the concept of Prototype

function Bank(actNumber,branch,balance){
    this.actNumber = actNumber;
    this.branch = branch;
    this.balance = balance;
}
Bank.prototype.showDetails = function(){
    console.log(`Account Number : ${this.actNumber}`);
    console.log(`Branch : ${this.branch}`);
    console.log(`Balance : $${this.balance}`);
}
Bank.prototype.deposite = function(depAmount){
    this.balance+=depAmount;
    console.log(`After Deposite, Balance : $${this.balance}`);
}
Bank.prototype.withDraw = function(withAmount){
    if(withAmount>this.balance){
        console.log("######## Low Balance #######");
        console.log("--------Needs To deposite---------");
    }else{
        console.log(`WithDraw Amount : $${withAmount}`);
        console.log(`Remaining Balance : $${this.balance-withAmount}`);
    }
}
const bank = new Bank('SBI100890','VijayNagar',100000);
bank.showDetails();
bank.deposite(50000);
bank.withDraw(2000);