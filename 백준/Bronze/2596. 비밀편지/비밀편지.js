const secret = {
  "000000": "A",
  "001111": "B",
  "010011": "C",
  "011100": "D",
  100110: "E",
  101001: "F",
  110101: "G",
  111010: "H",
};

function findSecret(str) {
  const keys = Object.keys(secret);

  for (const key of keys) {
    let diff = 0;

    for (let i = 0; i < 6; i++) {
      if (str[i] !== key[i]) diff++;
    }

    if (diff === 0 || diff === 1) return secret[key];
  }

  return null;
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const answer = [];
let isError = false;

for (let i = 0; i < N; i++) {
  const sliceStr = input[0].slice(i * 6, (i + 1) * 6);

  let char = secret[sliceStr];

  if (!char) {
    char = findSecret(sliceStr);

    if (!char) {
      isError = true;
      console.log(i + 1);
      process.exit();
    }
  }

  answer.push(char);
}

!isError && console.log(answer.join(""));
