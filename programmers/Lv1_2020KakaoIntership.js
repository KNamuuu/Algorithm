function solution(numbers, hand) {
  var answer = "";

  let lefthand = 10; // * = 10
  let righthand = 12; // # = 12

  const distance = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    10: [3, 0],
    0: [3, 1],
    12: [3, 2],
  };

  numbers.map((n) => {
    if (n % 3 == 1) {
      answer += "L";
      lefthand = n;
    } else if (n % 3 == 0 && n !== 0) {
      answer += "R";
      righthand = n;
    } else {
      let leftDistance = findDistance(distance[n], distance[lefthand]);

      // console.log(righthand, distance[righthand]);
      let rightDistance = findDistance(distance[n], distance[righthand]);

      if (leftDistance > rightDistance) {
        answer += "R";
        righthand = n;
      } else if (leftDistance < rightDistance) {
        answer += "L";
        lefthand = n;
      } else if (leftDistance == rightDistance) {
        if (hand == "right") {
          answer += "R";
          righthand = n;
        } else if (hand == "left") {
          answer += "L";
          lefthand = n;
        }
      }
    }
  });

  return answer;
}

function findDistance(num, hand) {
  return Math.abs(num[0] - hand[0]) + Math.abs(num[1] - hand[1]);
}
