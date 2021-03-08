class Car {
    constructor (name, v){
        this.name = name;
        this.v = v;
}
getName() {
    return this.name;
}
getV(){
    return this.v;
}
print(){
    console.log(`a name is ${this.getName()} and v is ${this.getV()}`);
}
setSpeed(k){
    return this.v = k;
}
};
let car_1 = new Car("Tesla", 548);
let car_2 = new Car("BMW", 80);
let car_3 = new Car("Volvo", 451);
// car_1.setSpeed(120);
// car_1.print;
let carsArray = [car_1, car_2, car_3];
let maxSpeed = carsArray.reduce((max, car) => {
     return  car.v > max ? car.v : max;
       }    
    ,0);//120
//how can I reach car.Name, that has a max speed;
console.log("MAx", maxSpeed);
const sortCars = (arr) => {
     return arr.sort(compareVs);
};
const compareVs = (a,b) => {
   return  b.getV() - a.getV();
};
console.log("Sorted", sortCars(carsArray)); 