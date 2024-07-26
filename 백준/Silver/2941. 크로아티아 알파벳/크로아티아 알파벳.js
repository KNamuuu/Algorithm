const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (const pattern of alphabet) {
    const regex = new RegExp(pattern, "g");
    input = input.replace(regex, 1);
}

console.log(input.length);
