const icePromise = new Promise(function(resolve, reject) {
  // When you create the promise, you must give it the code that will be run asynchronously.
  // You provide this code as the argument of the constructor function:
  console.log("Before setTimeout");
  setTimeout(function createSundae(flavor = 'chocolate') {
    console.log("In setTimeout");
    const sundae = {};
    // request ice cream
    // get cone
    // warm up ice cream scoop
    // scoop generous portion into cone!
    if (!sundae) {
      reject("Sorry no sundae for you");
    }
    
    resolve(sundae);
  }, Math.random() * 2000);
})
// The .then() method takes two functions:
// the function to run if the request completed successfully
// the function to run if the request failed to complete
  .then((sundae) => {
    console.log(`Time to eat my delicious ${sundae}`);
  }, (msg) => {
    console.log(msg);
  });
console.log(icePromise);