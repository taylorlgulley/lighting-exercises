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