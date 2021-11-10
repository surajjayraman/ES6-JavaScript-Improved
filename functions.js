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