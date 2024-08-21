const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const N = Number(input.shift());
const people = new Set();

for (const log of input) {
    const [name, action] = log.split(" ");

    if (action === "enter") people.add(name);
    else if (action === "leave") people.delete(name);
}

console.log(Array.from(people).sort().reverse().join("\n"));
