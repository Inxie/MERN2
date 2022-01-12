class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }
    drinkSake() {
        this.health += 10;
    }
    showStats() {
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);
    }
}



const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

