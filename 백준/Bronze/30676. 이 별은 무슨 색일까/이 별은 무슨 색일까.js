const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = Number(input.shift());

if (N <= 780 && N >= 620) console.log("Red");
else if (N < 620 && N >= 590) console.log("Orange");
else if (N < 590 && N >= 570) console.log("Yellow");
else if (N < 570 && N >= 495) console.log("Green");
else if (N < 495 && N >= 450) console.log("Blue");
else if (N < 450 && N >= 425) console.log("Indigo");
else if (N < 425 && N >= 380) console.log("Violet");
