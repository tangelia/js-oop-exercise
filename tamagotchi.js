console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(){
        this.foodInTummy = 10;
        this.restedness= 10;
        this.health = 10;
    }
 cry(){
     this.foodInTummy --; 
    console.log("WAHH!!!");
    console.log('food in tummy: ' + this.foodInTummy)
 }
}
//create new Tamagotchis

let newToy1 = new Tamagotchi()
let newToy2 = new Tamagotchi()



//test out your Tamagotchies below via console.logs

console.log(newToy1);
console.log(newToy2);

newToy1.cry();
newToy2.cry();


    