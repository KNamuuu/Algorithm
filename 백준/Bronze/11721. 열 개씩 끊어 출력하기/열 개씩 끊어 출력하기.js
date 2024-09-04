const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

for (let i = 0; i < input.length; i += 10) {
    console.log(input.slice(i, i + 10));
}
