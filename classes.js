// ES6 class preview
class Dessert {
  constructor(calories = 250) {
    this.calories = calories;
  }
}

class IceCream extends Dessert {
  constructor(flavor, calories, toppings = []) {
    super(calories);
    this.flavor = flavor;
    this.toppings = toppings;
  }
  addToping(topping) {
    this.toppings.push(topping);
  }
}

console.log(new IceCream('Vanilla',undefined,['cherry']));

// convert a function to a class
function plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

class Plane {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log("Starting engine...");
    this.enginesActive = true;
  }
}

const surajPlane = new Plane(4);

// Class is just a function
console.log(typeof surajPlane, typeof Plane);

// Subclasses with ES6
class Tree {
  constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }
  
  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
}
class Maple extends Tree {
  constructor(syrupQty = 15, size, leaves) {
    super(size, leaves);
    this.syrupQty = syrupQty;
  }
  
  changeSeason(season) {
    super.changeSeason(season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }
  
  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

/* tests */
const myMaple = new Maple(20, 5);
console.log(myMaple);
console.log(myMaple.changeSeason('summer'));
console.log(myMaple);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');
console.log(myMaple);

// Working with JavaScript Subclasses
class Toy {}
class Dragon extends Toy {}
const dragon1 = new Dragon();

console.log(dragon1 instanceof Toy); // true

/*
Create a Bicycle subclass that extends the Vehicle class.
The Bicycle subclass should override Vehicle's constructor function
by changing the default values for wheels from 4 to 2
and horn from 'beep beep' to 'honk honk'.
*/

class Vehicle {
  constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
    this.color = color;
    this.wheels = wheels;
    this.horn = horn;
  }

  honkHorn() {
    console.log(this.horn);
  }
}

// code goes here
class Bicycle extends Vehicle {
  constructor(color = 'blue', wheels = 2, horn = 'honk honk') {
    super();
    this.color = color;
    this.wheels = wheels;
    this.horn = horn;
  }
    
}

/* tests */
const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk



