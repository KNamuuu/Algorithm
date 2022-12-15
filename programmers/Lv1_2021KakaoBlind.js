function solution(new_id) {
  var answer = new_id
    .toLowerCase() // step1
    .replace(/[^a-z0-9-_.]/g, "") // step2
    .replace(/\.+/g, ".") // step3
    .replace(/^\.|\.$/g, "") // step4
    .replace(/^$/, "a") // step5
    .slice(0, 15) // step6-1
    .replace(/\.$/g, "");
  while (answer.length < 3) {
    answer += answer.substring(answer.length - 1, answer.length);
  }

  return answer;
}
