// ==  ===
const age = "18";
if (age === 18) console.log("you have became an adult!(strict)");
if (age == 18) console.log("you have became an adult!(loose)");

const favorite = prompt("what is your favourite number?");
console.log(favorite);
console.log(typeof favorite); //its string
if (favorite === 23) {
  // "23" = 23
  console.log("cool!");
} else if (favorite == 7) {
  console.log("its a cool number too!");
} else {
  console.log("its not 7 or 23");
}
//!==
if (favorite !== 10) console.log("why not 10");
