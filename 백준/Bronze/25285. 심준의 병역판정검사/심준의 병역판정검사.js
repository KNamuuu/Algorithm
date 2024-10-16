function calculateBMI(height, weight) {
  return weight / Math.pow(height / 100, 2);
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const answer = [];

for (const line of input) {
  const [height, weight] = line.split(" ").map(Number);

  if (height < 140.1) answer.push(6);
  else if (height >= 140.1 && height < 146) answer.push(5);
  else if (height >= 146 && height < 159) answer.push(4);
  else if (height >= 159 && height < 161) {
    const BMI = calculateBMI(height, weight);

    if (BMI >= 16 && BMI < 35) answer.push(3);
    else answer.push(4);
  } else if (height >= 161 && height < 204) {
    const BMI = calculateBMI(height, weight);

    if (BMI >= 20 && BMI < 25) answer.push(1);
    else if ((BMI >= 18.5 && BMI < 20) || (BMI >= 25 && BMI < 30))
      answer.push(2);
    else if ((BMI >= 16.0 && BMI < 18.5) || (BMI >= 30.0 && BMI < 35.0))
      answer.push(3);
    else answer.push(4);
  } else answer.push(4);
}

console.log(answer.join("\n"));
