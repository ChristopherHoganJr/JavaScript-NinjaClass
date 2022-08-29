class Ninja {
  constructor(name, health, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName() {
    console.log(`Ninja name: - ${this.name}`);
  }

  showStats() {
    console.log(`Ninja name: - ${this.name}`);
    console.log(`Ninja strength: - ${this.strength}`);
    console.log(`Ninja speed: - ${this.speed}`);
    console.log(`Ninja health: - ${this.health}`);
  }

  drinkSake() {
    this.health += 10;
  }
}

let NinjaChris = new Ninja("Chris", 1000);
NinjaChris.sayName();
NinjaChris.showStats();
NinjaChris.drinkSake();
NinjaChris.showStats();
