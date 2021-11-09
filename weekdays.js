/*
 *
    Writing a For...of Loop

    loops through each day in the days array
    capitalizes the first letter of the day
    and prints the day out to the console

    Your code should log the following to the console:

    Sunday
    Monday
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// Solution approach 1:
for (const day of days) {
  const dayArr = day.split('');
  dayArr[0] = dayArr[0].toUpperCase();
  console.log(dayArr.join(''));
}

console.log("*****************");

// Solution approach 2:
for (const day of days) {
  console.log(day.slice(0,1).toUpperCase() + day.slice(1));
}