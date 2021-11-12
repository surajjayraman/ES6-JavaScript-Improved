// The following code takes a list of names and converts each one to uppercase
// using a regular function:
const names = ['Farrin', 'Kagure', 'Asser'];

const upperizedNames = names.map(function(name) {
  return name.toUpperCase();
});
console.log(upperizedNames);

// The code below does the same thing except:
// instead of passing a regular function to the map() method, it passes an arrow function.
const upperArrowNames = names.map(name => name.toUpperCase());
console.log(upperArrowNames);

// Another example of replacing regular func with arrow func
const countryNames = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

const longNames = countryNames.filter(name => name.length > 6);
console.log(longNames);

// constructor
function IceCream() {
  this.scoops = 0;
  this.addScoop = function() {
    this.scoops++;
    setTimeout(() => {
      console.log('scoop added!');
    }, 500);
  };
}
const dessert = new IceCream();
dessert.addScoop();
console.log(dessert.scoops);

// ES6 has introduced a new way to create defaults.
// It's called default function parameters.
function greet(name = 'Student', greeting = 'Welcome') {
  return `${greeting} ${name}`;
}

console.log(greet());

// Defaults and destructuring arrays
function createGrid([width = 5, height = 5] = []) {
  return `Generates a ${width} x ${height} grid`;
}

console.log(createGrid([2,3]));
console.log(createGrid([2,undefined]));
console.log(createGrid());

function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
  return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}
console.log(houseDescriptor['green', ['white']]);
console.log(houseDescriptor(['green']));

// Create a buildHouse() function that accepts an object as a default parameter
const buildHouse = ({floor = 1, color = 'red', walls = 'brick'}={}) => {
    return `Your house has ${floor} floor(s) with ${color} ${walls} walls.`

}
console.log(buildHouse({floor: 2, color:'green', walls:'granite'}));