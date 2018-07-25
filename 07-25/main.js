// [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"] 

// Lightning Exercise Loop over every item in this array
// and return a new array that contains only the strings. Log out the result.


let randomArray = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"];

let string = randomArray.filter((item) => {
    let isString = (typeof item === "string");
    return isString;
})
console.log(string);

// Jonathan's method
// let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

// const strings = array.filter(item => {
//     const isString = (typeof item === 'string')
//     return isString;
// })

// console.log(strings)

//Meg's method
// let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

// const strings = array.filter(item => {
//     return typeof item === 'string';
// })

// console.log(strings)