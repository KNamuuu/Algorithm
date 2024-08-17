function solution(edges) {
    let graph = {};
    for(const edge of edges) {
        const [from, to] = edge;
        
        graph[from] ||= {outline: 0, inline: 0};
        graph[to] ||= {outline:0, inline:0};
        
        graph[from].outline++;
        graph[to].inline++;
    }
 
    let root = 0;
    let bar = 0;
    let eight = 0;
    let donut = 0;
    let countOfGraph = 0;
    
    for(const node in graph){
        const {outline, inline} = graph[node];
        
        if(outline >= 2 && inline === 0) {
            root = Number(node);
            countOfGraph = outline;
        }
        
        if(outline === 0) bar++;
        if(outline === 2 && inline >= 2) eight++;
    }
    
    donut = countOfGraph - bar - eight;
    
    const answer = [root, donut, bar, eight]
    
    return answer;
}