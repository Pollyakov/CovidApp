class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    addToX(x){
        this.x += x;
    }
    addToY(y){
        this.y += y;
    }
    setX(x){
        this.x = x;
    }
    setY(x){
        this.y = y;
    }
    addPoint(point){
      this.addToX(point.getX());
      this.addToY(point.getY());
    }
    //compares (x,y) of this point to (x,y) of argument
    isSame(point){
        let isSameX = this.x===point.getX() ? true : false;
        let isSameY = this.y===point.getY() ? true : false;
        return isSameX && isSameY;
    }
    print() {
        console.log(this.getX(), this.getY());
    }
}
class PointWorld {
    constructor(){
        this.pointsArr = [];
    }
    setArr(pointsArr){
        this.pointsArr = pointsArr;
    }
    sortPoints(){
       return this.pointsArr.sort((a,b)=>a.getY() - b.getY());
    }
    ////////???????????????????????
    sumX(){
       return this.pointsArr.reduce(
            (acc,point) => {
                acc + point.getX();
            },0 );
    }
    unique(){
            let unionSet = new Set(this.pointsArr);
            let arr = [...unionSet];
            return arr;
          }
    }

let point1 = new Point(10,250);
let point2 = new Point(8,100);
let point3 = new Point(10,14);
console.log(point1.isSame(point3));
point1.addPoint(point3);
point1.print();
let arr1 = [point1, point2, point3, point1];
let pw1 = new PointWorld();
pw1.setArr(arr1);
pw1.sortPoints();
console.log("sorted array of ponts:", pw1.pointsArr);
let k = pw1.sumX();
console.log('sumX()',k);

console.log('Uniqe: ', pw1.unique());

