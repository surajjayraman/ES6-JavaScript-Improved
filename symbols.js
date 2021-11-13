// A symbol is a unique and immutable data type that is often used to identify object properties.
const sym1 = Symbol('apple');
console.log(sym1);

// compare two symbols with the same description
const sym2 = Symbol('apple');
console.log(sym2 === sym1);

// Without the use of Symbols
const bowl = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.151 },
  'orange': { color: 'orange', weight: 170.097 },
  'banana': { color: 'yellow', weight: 176.845 }
};
console.log(bowl); // output: Object {apple: Object, banana: Object, orange: Object}

// To fix the problem of Object banana being overwritten we can use symbols
const bowlWithSymbols = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowlWithSymbols);