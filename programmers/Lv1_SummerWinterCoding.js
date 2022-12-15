function solution(nums) {
  // 최대숫자가 998+999+1000 이니 + 1 해준 2999 배열 생성
  // 에라토스테네스의 체 사용
  let arr = Array(2999).fill(true).fill(false, 0, 2);

  for (let i = 1; i * i <= 2999; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= 2999; j += i) {
        arr[j] = false;
      }
    }
  }

  var answer = 0;
  let sums = [];

  // indexOf 함수를 사용하여 sums배열에 중복 값 없이 push
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        // sums.indexOf(nums[i]+nums[j]+nums[k]) > -1 ? null : sums.push(nums[i]+nums[j]+nums[k]);
        sums.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  // sums 배열의 값들 중 arr[x]값이 true인 것(소수 인 것) 갯수
  for (x of sums) {
    if (arr[x]) answer++;
  }

  return answer;
}
