class Animal {
    constructor (name, sound){
        this.name = name;
        this.sound = sound;
}
getName() {
    return this.name;
}
getSound(){
    return this.sound;
}
print(){
    console.log(`name is ${this.getName()} and sound is ${this.getSound()}`);
}
}
let animal1 = new Animal("cat", 'myau');
animal1.print();
