// The spread operator, gives you the ability to expand,
//  or spread, iterable objects into multiple elements.

const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);

/*
 * Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(produce);

// Using the rest parameter: calculate sum of an unlimited amt of nums
const mySum = function(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
};

console.log(mySum(9, 45, 6));

// create an average() function that calculates the average of an unlimited amount of numbers.
const myAvg = function(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return nums.length ? total / nums.length : total;
};

console.log(myAvg(45,66,77,5, 100000, 45, 44, 6, 7));
