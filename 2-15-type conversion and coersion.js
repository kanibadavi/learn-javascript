//type conversion(converting between types manually) and coercion(behind the scene)
//type conversion

//the code below doesnt work correctly as we expect
const birthYear = '1991'
console.log(birthYear + 19);

//to convert string to number
console.log(Number(birthYear) + 19);
 
//to convert number to string
console.log(String(23) , 23);

//type coersion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');