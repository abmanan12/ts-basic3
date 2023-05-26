var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
// ENUM NUMERIC
// ENUM NUMERIC
// by default // logs 0
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
console.log(currentDirection);
console.log(CardinalDirections.East);
console.log(CardinalDirections.South);
console.log(CardinalDirections.West);
// set 1st logs manually and then next will increased number 1
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1[CardinalDirections1["North"] = 11] = "North";
    CardinalDirections1[CardinalDirections1["East"] = 12] = "East";
    CardinalDirections1[CardinalDirections1["South"] = 13] = "South";
    CardinalDirections1[CardinalDirections1["West"] = 14] = "West";
})(CardinalDirections1 || (CardinalDirections1 = {}));
var currentDirection1 = CardinalDirections1.North;
console.log(currentDirection1);
console.log(CardinalDirections1.East);
console.log(CardinalDirections1.South);
console.log(CardinalDirections1.West);
// set all logs manually and then next will not increased number
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North"] = 101] = "North";
    CardinalDirections2[CardinalDirections2["East"] = 202] = "East";
    CardinalDirections2[CardinalDirections2["South"] = 303] = "South";
    CardinalDirections2[CardinalDirections2["West"] = 404] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
var currentDirection2 = CardinalDirections2.North;
console.log(currentDirection2);
console.log(CardinalDirections2.East);
console.log(CardinalDirections2.South);
console.log(CardinalDirections2.West);
// ENUM STRING
// ENUM STRING
// (Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.)
var CardinalDirections3;
(function (CardinalDirections3) {
    CardinalDirections3["North"] = "North";
    CardinalDirections3["East"] = "East";
    CardinalDirections3["South"] = "South";
    CardinalDirections3["West"] = "West";
    // Notfound = 21
})(CardinalDirections3 || (CardinalDirections3 = {}));
;
console.log(CardinalDirections3.North);
console.log(CardinalDirections3.West);
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(car.year);
console.log(car.type);
console.log(car.model);
var carYear1 = 2021;
var carType1 = "Toyota_1";
var carModel1 = "Corolla_1";
var car1 = {
    year: carYear1,
    type: carType1,
    model: carModel1
};
console.log(car1.year);
console.log(car1.type);
console.log(car1.model);
var fName = "Abdul";
var lName = "Manan";
var ages = 21;
var idz = 1;
var std_Name = {
    first_Name: fName,
    last_Name: lName,
    age: ages,
    id: idz
};
console.log("".concat(std_Name.first_Name, " ").concat(std_Name.last_Name));
var size = {
    height: 20,
    width: 10
};
console.log(size.height);
var colors = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(colors.color);
console.log(colors.width);
// UNION | (OR)
// UNION | (OR)
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(400);
printStatusCode('404');
// In our example we are having an issue invoking toUpperCase() as its a string method and number doesn't have access to it.
// function printStatusCode1(name: string | number) {
//     console.log(`My Name is ${name.toUpperCase()}.`)
// }
// printStatusCode1('abdul manan');
function printStatusCode2(name) {
    console.log("My Name is ".concat(name.toUpperCase(), "."));
}
printStatusCode2('abdul manan');
