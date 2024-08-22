//  Q) Write a JavaScript program that determines 
//     the category of a person on their age.
//     The Categories are:

//     1) Child: 0-12 years
//     2)Teenager: 13-19 years
//     3) Adult: 20-64 years
//     4) Senior: 65 years and above


// let age = prompt("Enter your age to check in which category you lie:");

// if (isNaN(age) || age < 0) {
//     console.log("Invalid number: Enter a positive value");
// } else if (age <= 12) {
//     console.log("You are a Child");
// } else if (age <= 19) {
//     console.log("You are a Teenager");
// } else if (age <= 64) {
//     console.log("You are an Adult");
// } else if (age >= 65) {
//     console.log("You are a Senior");
// } else {
//     console.log("Invalid number");
// }

function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var mycar = new car("honda",2012,2012);
console.log(mycar);























