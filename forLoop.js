const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// The for...in loop improves upon the weaknesses of the for loop
// by eliminating the counting logic and exit condition.
for (const index in digits) {
  console.log(digits[index]);
}

// Also, the for...in loop can get you into big trouble when you need to add an extra method
// to an array (or another object). Because for...in loops loop over all enumerable properties,
// this means if you add any additional properties to the array's prototype,
// then those properties will also appear in the loop.

Array.prototype.decimalfy = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};
  
for (const index in digits) {
  console.log(digits[index]);
}

// The for...of loop is used to loop over any type of data that is iterable.
for (const digit of digits) {
  console.log(digit);
}

// The for...of loop also has some additional benefits
// that fix the weaknesses of the for and for...in loops.
// You can stop or break a for...of loop at anytime.
for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}

// And you don’t have to worry about adding
// new properties to objects.
// The for...of loop will only loop over the values in the object.
Array.prototype.decimalfy = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};
// This time, the properties were not printed out to the console.
for (const digit of digits) {
  console.log(digit);
}




