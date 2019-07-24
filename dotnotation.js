/*
 console.log("hello".length+" letters");

console.log ("hey how's it going".toUpperCase());

console.log(Math.floor(Math.random() * (10000 - 50)));
*/
var s1 =  "0"
var s2 =  "0"
var s3 =  "0"
var s4 =  "0"
var s5 =  "X"
var s6 =  "0"
var s7 =  "X"
var s8 =  "X"
var s9 =  "0"

console.log(    `      |    |    `);
console.log(    `   ${s1}  | ${s2}  | ${s3}  `);
console.log(    `      |    |    `);
console.log(    `  --------------`);
console.log(    `      |    |    `);
console.log(    `   ${s4}  | ${s5}  | ${s6}   `);
console.log(    `      |    |    `);
console.log(    `  --------------`);
console.log(    `      |    |    `);
console.log(    `   ${s7}  | ${s8}  | ${s9}   `);
console.log(    `      |    |    `);
if (s1 == "X" && s2 == "X" && s3 == "X") {
console.log("win")
}
else if (s1 == "0" && s2 == "0" && s3 == "0") {
    console.log("win")
}
else{
console.log("lose")
}