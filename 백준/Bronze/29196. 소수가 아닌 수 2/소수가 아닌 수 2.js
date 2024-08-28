const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let str = input.shift();
let [integerPart, fractionalPart] = str.split(".");

if (!fractionalPart) {
    console.log("YES");
    console.log(integerPart + " 1");
    return;
}

let len = fractionalPart.length;
let denominator = Math.pow(10, len);
let numerator = parseInt(integerPart) * denominator + parseInt(fractionalPart);

let g = gcd(numerator, denominator);

numerator /= g;
denominator /= g;

console.log("YES");
console.log(numerator + " " + denominator);
