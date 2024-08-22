// Switch casse


let todayTime = "morning";
switch (todayTime) {
    case "morning":
        console.log("Good Morning, Ali")
        break;
    case "afternoon":
        console.log("Good AfterNoon, asif")
        break;
    case "evening":
        console.log("Good Evening, humza")
        break;
    default:
        console.log("Invalid formate")
}



// Introduction using "+" . "``"
let fullName = "M Bilal Saleem";
let lastName = "Awan";
let city = "Islamabad";
let university = "FUUAST";



// console.log using concatenation
console.log("My name is " + fullName + " " + lastName + " I belongs to " + city + " " + "I have studied from " + " " + university + " University")

// console.log using template literal
console.log(`My name is ${fullName} ${lastName} I belongs to ${city} I have studied from ${university} University`)



// for loop using decrement operator

for (let i = 10; i > 0; i--) {
    console.log(i)
}