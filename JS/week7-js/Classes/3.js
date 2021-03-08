//1.
class SortNumbers {
  constructor() {
    this.numList = [];
  }
  addNum(n) {
    const isPrime = (num) => {
      for (let i = 2; i < num; i++) if (num % i === 0) return false;
      return num > 1;
    };
    if (isPrime(n) && !this.numList.includes(n)) {
      this.numList.push(n);
      return true;
    } else {
      return false;
    }
  }
  getAll() {
    return this.numList;
  }
  removeNum(num) {
    for (let i = 0; i < this.numList.length; i++) {
      if (this.numList[i] === num) {
        this.numList.splice(i, 1);
        return true;
      } else {
        return false;
      }
    }
  }
  print() {
    console.log(this.numList);
  }
  //9
  share(sortnumberInst) {
      console.log(sortnumberInst);
    let arr = [...this.numList];
    let arr2 = [...sortnumberInst.numList];
    let counter = 0;
    for (let i = 0; i <= arr.lenght - 1; i++) {
        console.log("I", i);
        for (let j = 0; j <= arr2.length-1; j++){
            console.log("J", j);
            if ( arr[i]===arr[j]) {
                counter++;
            } 
        }
    }
    return counter;
  }
}
//3
let n1 = new SortNumbers();
n1.addNum(10);
console.log(n1.numList);
n1.addNum(11);
//7
let n2 = new SortNumbers();
n2.addNum(5);
n2.addNum(3);
n2.addNum(7);
n2.addNum(13);
let n3 = new SortNumbers();
n3.addNum(3);
n3.addNum(5);
console.log(n3.share(n2));

