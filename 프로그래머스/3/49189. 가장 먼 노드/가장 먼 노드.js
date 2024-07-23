function solution(n, edge) {
    var answer = 0;
    
    const graph = Array.from({length: n + 1}, () => []);
    const visited = Array.from({length: n + 1}, () => false);
    const distances = new Map();
    
    for(const line of edge) {
        const [a, b] = line.map(Number);
        
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const queue = [];
    
    function bfs(node, count) {
        queue.push([node, count]);
        visited[node] = true;
        distances.set(node, count);
        
        while(queue.length > 0) {
            const [currentNode, currentCount] = queue.shift();
            
            for(const nextNode of graph[currentNode]) {
                if(!visited[nextNode]) {
                    queue.push([nextNode, currentCount + 1]);
                    visited[nextNode] = true;
                    distances.set(nextNode, currentCount + 1);
                }
            }
        }
    }
    
    bfs(1, 1);

    let max = 0;
    for(const [node, distance] of distances) {
        if(max < distance) max = distance;
    }
    
    for(const [node, distance] of distances) {
        if(distance === max) answer++;
    }
    
    return answer;
}