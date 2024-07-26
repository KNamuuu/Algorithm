const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

if (input.split(" ")[0] === "") {
    console.log(0);
} else console.log(input.split(" ").length);
