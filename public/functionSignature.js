"use strict";
let greet1;
greet = (name, greetings) => {
    console.log(`${name}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails;
logDetails = (ninjaStudent) => {
    console.log(`${ninjaStudent.name} is super hero with mobile number ${ninjaStudent.phone}`);
};
