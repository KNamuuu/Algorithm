function solution(s) {
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let word = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  while (isNaN(s)) {
    for (let i = 0; i < 10; i++) {
      s = s.replace(word[i], num[i]);
    }
  }

  return Number(s);
}
