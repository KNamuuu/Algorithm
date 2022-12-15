function solution(n, lost, reserve) {
  let students = new Array(n).fill(1);

  lost.forEach((i) => students[i - 1]--);
  reserve.forEach((i) => students[i - 1]++);

  let count = 0;

  students.forEach((student, index) => {
    if (student == 0) {
      if (students[index - 1] === 2) {
        students[index - 1]--;
        student++;
      } else if (students[index + 1] === 2) {
        students[index + 1]--;
        student++;
      } else count++;
    }
  });

  return n - count;
}
