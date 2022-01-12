class Ninja {
    constructor(name, health, speed, strenght) {
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

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super();
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter", "200", "10", "10", "10");
superSensei.speakWisdom()
superSensei.showStats