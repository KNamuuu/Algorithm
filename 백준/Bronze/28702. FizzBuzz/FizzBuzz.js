const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

let nextNumber;

if (!isNaN(input[0])) nextNumber = Number(input[0]) + 3;
else if (!isNaN(input[1])) nextNumber = Number(input[1]) + 2;
else if (!isNaN(input[2])) nextNumber = Number(input[2]) + 1;

if (nextNumber % 3 === 0 && nextNumber % 5 === 0) console.log("FizzBuzz");
else if (nextNumber % 3 === 0) console.log("Fizz");
else if (nextNumber % 5 === 0) console.log("Buzz");
else console.log(nextNumber);
