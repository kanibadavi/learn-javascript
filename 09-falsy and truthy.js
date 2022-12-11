//falsy and truthy
//falsy values: 0 , "" , null , undefined , NaN
//they are not false by themselves but become false when boolean

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean("kani"));
console.log(Boolean({}));


const money = 0;
if (money) {
  console.log("don't spend it all!");
} else {
  console.log("YOU SHOUD GET A JOB");
}


let height;
if (height) {
    console.log("yay! height is defined");
} else {
    console.log("height is undefined!");
}