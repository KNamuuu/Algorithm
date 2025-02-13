const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());
const answer = [];

for (let game = 0; game < T; game++) {
  const charMap = new Map();
  const charArray = input.shift().split("");
  const K = Number(input.shift());

  const wordLengthArray = [];

  charArray.forEach((char, idx) => {
    if (charMap.has(char)) {
      // const arr = [...charMap.get(char), idx];
      const arr = charMap.get(char);
      arr.push(idx);

      arr[0]++;
      charMap.set(char, arr);
    } else charMap.set(char, [1, idx]);
  });

  let minLength = Infinity;
  let maxLength = -Infinity;

  charMap.forEach((el) => {
    if (el[0] >= K) {
      for (let i = 1; i + K - 1 < el.length; i++) {
        // wordLengthArray.push(el[i + K - 1] - el[i] + 1);
        const wordLength = el[i + K - 1] - el[i] + 1;
        if (minLength > wordLength) minLength = wordLength;
        if (maxLength < wordLength) maxLength = wordLength;
      }
    }
  });

  // if (wordLengthArray.length === 0) answer.push(-1);
  // else
  //   answer.push(
  //     Math.min(...wordLengthArray) + " " + Math.max(...wordLengthArray)
  //   );

  if (minLength === Infinity) answer.push(-1);
  else answer.push(minLength + " " + maxLength);
}

console.log(answer.join("\n"));
