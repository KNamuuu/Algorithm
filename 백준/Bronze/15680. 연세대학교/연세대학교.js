const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

input === "0" ? console.log("YONSEI") : console.log("Leading the Way to the Future")