function solution(numbers) {
  let answer = "";
  numbers.sort((a, b) => {
    // 문자열로 붙였을 때 더 큰 수가 앞으로 오도록 정렬
    let aPlusB = parseInt(a.toString() + b.toString());
    let bPlusA = parseInt(b.toString() + a.toString());

    return bPlusA - aPlusB;
  });

  answer = numbers.join("");

  return answer[0] === "0" ? "0" : answer;
}
