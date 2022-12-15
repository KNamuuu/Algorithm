function solution(lottos, win_nums) {
  var answer = [];
  let correct = 0;
  let zero_count = 0;

  for (x of lottos) {
    if (win_nums.includes(x)) correct++;
    else if (x == 0) zero_count++;
  }

  correct + zero_count > 1
    ? answer.push(7 - (correct + zero_count))
    : answer.push(6);
  correct > 1 ? answer.push(7 - correct) : answer.push(6);

  return answer;
}
