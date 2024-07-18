function isConnected(word1, word2) {
    let count = 0;
    
    for(let i = 0; i < word1.length; i++){
        if(word1[i] !== word2[i]) count++;
    }
    
    return count === 1 ? true : false;
}

function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    // const visited = Array.from(words, () => false);
    const visited = new Array(words.length).fill(false);
    
    function bfs() {
        let queue = [[begin, 0]];
        
        while (queue.length > 0) {
            const [currentWord, currentCount] = queue.shift();
            
            if(currentWord === target) return currentCount;
          
            for(let i = 0; i < words.length; i++) {
                if(isConnected(words[i], currentWord) && !visited[i]) {
                    visited[i] = true;
                    queue.push([words[i], currentCount + 1]);
                }
            }
        }
        
        return 0;
    }
    
    return bfs();
}