const firstName = "kani";
const birthYear = 1998;
const job = "programmer";
const now = 2022;

const kani =
  "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job;
console.log(kani);

//template literals
const newKani = `I'm ${firstName}, a ${now - birthYear} years old ${job}`;
console.log(newKani);

//multi line
console.log(
  "string \n\
multiple \n\
lines "
);

console.log(`string
multiple
lines`);
