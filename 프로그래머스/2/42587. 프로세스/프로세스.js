// function solution(priorities, location) {
//     var answer = 0;
    
//     const prioritiesWithIdx = priorities.map((prior, index) => {
//         return {prior, index}
//     });
    
//     while (true) {
//         const bestPrior = Math.max(...priorities);
        
//         const firstElement = prioritiesWithIdx.shift();
//         const firstPrio = priorities.shift();
        
//         if(firstElement.prior !== bestPrior) {
//             prioritiesWithIdx.push(firstElement);
//             priorities.push(firstPrio);
//         }
//         else {
//             answer++;
//             if(firstElement.index === location) break;
//         }
//     }
    
//     return answer;
// }

function solution(priorities, location) {
    let answer = 0;

    const queue = priorities.map((prio, idx) => {
        return { prio, idx };
    });

    while (queue.length > 0) {
        let current = queue.shift();

        if (queue.some((item) => item.prio > current.prio)) {
            queue.push(current);
        } else {
            answer++;
            if (current.idx === location) return answer;
        }
    }
}
