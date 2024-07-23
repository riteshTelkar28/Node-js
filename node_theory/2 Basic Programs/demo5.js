// program showing the concept of Prototype

function Vehicle(make,model,year){
    this.color="RoyalBlue";
    this.price=789000;
    this.showDetails = ()=>{
        console.log(`Model : ${model}\nMaker : ${make}\nYear : ${year}`);
        console.log(`Color : ${this.color}\nPrice : Rs.${this.price}`);
    }
}
Vehicle.prototype.someMore = function(){
//    console.log(`Color : ${this.color}\nPrice : Rs.${this.price}`);
}
const obj = new Vehicle("Honda","Amaze",2024);
obj.showDetails();
obj.someMore();