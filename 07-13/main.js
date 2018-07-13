console.log("Now for some pracctice!")

// Create a function called `go` that takes 2 arguments: 
// 1. direction (forwards, backwards, etc.)
// 1. speed (mph).

// The function, when invoked, will print out the following in your console (for example): `The car is moving forward, at 25 mph.

// Option 1 for answer
const go = function (direction, speed) {
    return `The car is moving ${direction}, at ${speed} mph.`
}

const car1 = go("forward", "25");
console.log(car1);



// Option 2 for answer
function stop(direction, speed){
    console.log(`The car is moving ${direction}, at ${speed} mph.`)
}

stop("backward", "5");



// Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

// Example:

// The car is moving forward at 82 mph
// SLOW DOWN!

function stop(direction, speed){
    console.log(`The car is moving ${direction}, at ${speed} mph.`)
    if (speed > 75) {
        console.log("SLOW DOWN!");
    }
}

stop("forward", 85);
stop("forward", 65);
stop("forward", 95);


// Given the following set of data about chicken birth rates, you need to filter out the objects where the birth rate value is greater than 15 per 1000 chickens for that year. Store the good years in a new array named `bestYears`.

const birthRates = [
  { year: 1969, birthRate: 13}, 
  { year: 1970, birthRate: 16}, 
  { year: 1971, birthRate: 15}, 
  { year: 1972, birthRate: 11}, 
  { year: 1973, birthRate: 18}, 
  { year: 1974, birthRate: 17}, 
  { year: 1975, birthRate: 9}
]

const bestYears = [];

// Option1
// for (let i = 0; i < birthRates.length; i++) {
//     const currentYear = birthRates [i];
//     if (currentYear.birthRate > 15) {
//         bestYears.push(currentYear);
//     }
// }

// console.log(bestYears);

//Option 2
// birthRates.forEach(function (currentYear) {
//     if (currentYear.birthRate > 15) {
//         bestYears.push(currentYear);
//     }
// })

// console.log(bestYears);

//Option 3
for (currentYear of birthRates) {
    if (currentYear.birthRate > 15) {
        bestYears.push(currentYear);
    }
}
console.log(bestYears);

//Example of accessing object properties
const politician = {
    platform: {
        money: "I like it",
        health: "I'm against it"
    },
    district: "Michigan 13"
}

console.log(politician.platform.money);