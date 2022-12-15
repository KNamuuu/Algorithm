let fs = require("fs");

// let input = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((el) => parseInt(el));

let input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((el) => parseInt(el));

input.pop();

// function findPrimes(n) {
//   let arr = Array(n + 1)
//     .fill(true)
//     .fill(false, 0, 2);
//   for (let i = 2; i * i <= n; i++) {
//     if (arr[i]) {
//       for (let j = i * i; j <= n; j += i) {
//         arr[j] = false;
//       }
//     }
//   }
//   arr[2] = false; // 홀수 소수 이기에 2또한 제외

//   return arr;
// }

let result = "";

function findPrimes(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i] === 0) continue;
    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  return arr.map((el, i) => (el ? i : 0)).filter((e) => e);
}

let isPrimes = findPrimes(Math.max(...input));

input.forEach((el) => {
  //   let isPrimes = findPrimes(el)
  //     .map((el, i) => (el ? i : 0))
  //     .filter((e) => e);

  let answer = [];

  // el까지 비교하게 되면 똑같은 숫자들이 위치만 바꿔서 한번 더 등장
  // el의 반까지만 비교
  for (let i = 0; isPrimes[i] < el / 2 + 1; i++) {
    // testcase에서 소수를 뺏을 때 소수라면 tmp에는 index가 소수가 아니라면 -1이 저장
    const tmp = isPrimes.indexOf(el - isPrimes[i]);

    // -1이 아니라면(골드바흐의 추측을 만족한다면) answer에 저장
    if (tmp !== -1) {
      answer.push([isPrimes[i], isPrimes[tmp]]);
    }
  }
  // 차이가 가장 적은 마지막
  answer = answer.pop();

  result += `${el} = ${answer[0]} + ${answer[1]}\n`;
});

console.log(result);
