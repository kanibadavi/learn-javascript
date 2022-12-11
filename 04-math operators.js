//math operators
const now = 2037;
const ageSarah = now - 1991;
const ageKani = now - 1998;
console.log(ageSarah, ageKani);
console.log(ageSarah * 2, ageKani / 10, 2 ** 3);

//plus operator can be used in concating strings
const firstName = "kani";
const lastName = "badavi";
console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10; //15 + 10 = 25
x *= 4; //25 * 4 = 100
x++; //100 + 1 = 101
x--; //101 - 1 = 100
x--; //100 - 1 = 99
console.log(x);

//comparison operators
console.log(ageSarah > ageKani); // <, >, <=, >=
console.log(ageKani >= 18);
