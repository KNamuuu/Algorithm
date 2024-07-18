function solution(prices) {
    var answer = [];
    
    for(let i = 0; i < prices.length; i++) {
        let count = 0;
        for(let j = i + 1; j < prices.length; j++) {
            count++;
            if(prices[j] < prices[i]) break;
        }
        answer.push(count);
    }
    return answer;
}