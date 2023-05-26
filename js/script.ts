const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);


// ENUM NUMERIC
// ENUM NUMERIC

// by default // logs 0
enum CardinalDirections {
    North,
    East,
    South,
    West
}
let currentDirection = CardinalDirections.North;
console.log(currentDirection);
console.log(CardinalDirections.East);
console.log(CardinalDirections.South);
console.log(CardinalDirections.West);

// set 1st logs manually and then next will increased number 1
enum CardinalDirections1 {
    North = 11,
    East,
    South,
    West
}
let currentDirection1 = CardinalDirections1.North;
console.log(currentDirection1);
console.log(CardinalDirections1.East);
console.log(CardinalDirections1.South);
console.log(CardinalDirections1.West);

// set all logs manually and then next will not increased number
enum CardinalDirections2 {
    North = 101,
    East = 202,
    South = 303,
    West = 404,
}
let currentDirection2 = CardinalDirections2.North;
console.log(currentDirection2);
console.log(CardinalDirections2.East);
console.log(CardinalDirections2.South);
console.log(CardinalDirections2.West);


// ENUM STRING
// ENUM STRING
// (Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.)

enum CardinalDirections3 {
    North = 'North',
    East = "East",
    South = "South",
    West = "West",
    // Notfound = 21
};
console.log(CardinalDirections3.North);
console.log(CardinalDirections3.West);
//   console.log(CardinalDirections3.Notfound);


// TYPE ALISASES
// TYPE ALISASES

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};

console.log(car.year)
console.log(car.type)
console.log(car.model)

// without duplicating string

type CarYear1 = number
type CarType1 = string
// type CarModel = string
type Car1 = {
    year: CarYear1,
    type: CarType1,
    model: CarType1
}

const carYear1: CarYear1 = 2021
const carType1: CarType1 = "Toyota_1"
const carModel1: CarType1 = "Corolla_1"
const car1: Car1 = {
    year: carYear1,
    type: carType1,
    model: carModel1
};

console.log(car1.year)
console.log(car1.type)
console.log(car1.model)

// example

type FName = string
type LName = string
type Ages = number
type Idz = number
type Std_Name = {
    first_Name: FName,
    last_Name: LName,
    age: Ages,
    id: Idz
}

let fName: FName = "Abdul"
let lName: LName = "Manan"
let ages: Ages = 21
let idz: Idz = 1
const std_Name: Std_Name = {
    first_Name: fName,
    last_Name: lName,
    age: ages,
    id: idz
}
console.log(`${std_Name.first_Name} ${std_Name.last_Name}`)


// TYPE INTERFACE
// TYPE INTERFACE

interface Size {
    height: number,
    width: number
}
const size: Size = {
    height: 20,
    width: 10
};
console.log(size.height)

// TYPE INTERFACE with extending

interface Colors extends Size {
    color: string
}
const colors: Colors = {
    height: 20,
    width: 10,
    color: "red"
}
console.log(colors.color)
console.log(colors.width)


// UNION | (OR)
// UNION | (OR)

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
printStatusCode(400);
printStatusCode('404');

// In our example we are having an issue invoking toUpperCase() as its a string method and number doesn't have access to it.
// function printStatusCode1(name: string | number) {
//     console.log(`My Name is ${name.toUpperCase()}.`)
// }
// printStatusCode1('abdul manan');


function printStatusCode2(name: string) {
    console.log(`My Name is ${name.toUpperCase()}.`)
}
printStatusCode2('abdul manan');
