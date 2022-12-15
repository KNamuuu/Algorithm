function solution(N, stages) {
  var answer = [];

  let challenger = stages.length;

  let rate = {};

  for (let i = 1; i <= N; i++) {
    let failure = 0;
    stages.forEach((x) => {
      if (x == i) failure++;
    });
    rate[i] = failure / challenger;

    challenger -= failure;
  }

  let keysSorted = Object.keys(rate).sort((a, b) => {
    return rate[b] - rate[a];
  });

  return keysSorted.map((x) => parseInt(x));
}
