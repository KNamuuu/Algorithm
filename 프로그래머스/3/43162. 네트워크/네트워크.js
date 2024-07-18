function solution(n, computers) {
    var answer = 0;
    const visited = new Array(n).fill(false);
    
    function dfs(index) {
        visited[index] = true;
        
        for(let i = 0; i < n; i++) {
            if(computers[index][i] === 1 && !visited[i]) {
                dfs(i);
                // answer++;
            }
        }
    }

    for(let i = 0; i < n; i++){
        if(!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}