function solution(id_list, report, k) {
  var answer = [];

  let user_report = []; // 유저 별 신고당한 횟수
  let suspension = []; // 실제로 정지당한 유저

  let set = new Set(report);
  let unique_report = [...set];

  unique_report = unique_report.map((x) => x.split(" "));

  for (x in id_list) {
    answer.push(0);
    user_report.push(0);
  }

  for (x of unique_report) {
    // 유저 별 신고당한 횟수 저장
    for (const [index, value] of id_list.entries()) {
      if (x[1] == value) {
        user_report[index]++;
        break;
      }
    }
  }

  for (const [index, value] of user_report.entries()) {
    // k번 이상 신고당한 유저 저장
    if (value >= k) {
      suspension.push(id_list[index]);
    }
  }

  for (user of unique_report) {
    for (suspension_user of suspension) {
      if (user[1] === suspension_user) {
        answer[id_list.indexOf(user[0])]++;
        break;
      }
    }
  }

  return answer;
}
