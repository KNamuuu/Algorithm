function solution(dartResult) {
  var answer = 0;

  let dart = dartResult.match(/\d.?\D/g);
  let scoreArr = [];
  let optionArr = [];

  for (i of dart) {
    let score = parseInt(i.match(/\d/g).join(""));
    let option = i.match(/\D/g).join("");

    scoreArr.push(score);
    optionArr.push(option);
  }

  for (let i = 0; i < 3; i++) {
    for (x of optionArr[i]) {
      switch (x) {
        case "S":
          scoreArr[i] = Math.pow(scoreArr[i], 1);
          break;
        case "D":
          scoreArr[i] = Math.pow(scoreArr[i], 2);
          break;
        case "T":
          scoreArr[i] = Math.pow(scoreArr[i], 3);
          break;
        case "*":
          i == 0
            ? (scoreArr[i] *= 2)
            : ((scoreArr[i - 1] *= 2), (scoreArr[i] *= 2));
          break;
        case "#":
          scoreArr[i] *= -1;
          break;
      }
    }
  }

  for (x of scoreArr) {
    answer += x;
  }

  return answer;
}
