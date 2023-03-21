let greet1: (a: string, b: string) => void;

greet = (name: string, greetings: string) => {
  console.log(`${name}`);
};

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  }
  else {
    return numOne - numTwo;
  }
};

let logDetails: (obj: {name: string, phone: number}) => void;

type person = {name: string, phone: number};

logDetails = (ninjaStudent: person) => {
    console.log(`${ninjaStudent.name} is super hero with mobile number ${ninjaStudent.phone}`);

}