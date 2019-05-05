console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(creatureType, name){
        this.foodInTummy = 10;
        this.restedness= 10;
        this.health = 10;
        this.creatureType = creatureType;
        this.name = name;
    }

 cry() {
     this.foodInTummy --; 
    console.log("WAHH!!!");
    console.log('food in tummy: ' + this.foodInTummy);
 }
 describe() {
    this.creatureType+ " " + this.name;
    console.log("I am a "+this.creatureType+" and my name is "+this.name);
}
}
//create new Tamagotchis

let newToy1 = new Tamagotchi()
let newToy2 = new Tamagotchi()
let newToy3 = new Tamagotchi("Devil","Tommy")
let newToy4 = new Tamagotchi("Angel","Tina")




//test out your Tamagotchies below via console.logs

console.log(newToy1);
console.log(newToy2);
console.log(newToy3);
console.log(newToy4);

newToy1.cry();
newToy2.cry();
newToy3.describe();
newToy4.describe();



    