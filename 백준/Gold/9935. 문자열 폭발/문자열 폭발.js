const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const string = input[0];
const explode = input[1];
const stack = [];
const length = explode.length;

for (const char of string) {
  stack.push(char);

  while (stack.length >= length && stack.slice(-length).join("") === explode) {
    stack.length -= length;
  }
}

console.log(stack.length === 0 ? "FRULA" : stack.join(""));
