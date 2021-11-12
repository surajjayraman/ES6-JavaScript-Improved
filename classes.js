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

