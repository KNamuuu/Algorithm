function solution(board, moves) {
  var answer = 0;
  let basket = [];

  moves.forEach((x) => {
    x--;
    for (let i = 0; i < board.length; i++) {
      const item = board[i][x];
      if (item !== 0) {
        if (basket[basket.length - 1] == item) {
          basket.pop();
          answer += 2;
        } else {
          basket.push(item);
        }
        board[i][x] = 0;
        break;
      }
    }
  });
  return answer;
}
