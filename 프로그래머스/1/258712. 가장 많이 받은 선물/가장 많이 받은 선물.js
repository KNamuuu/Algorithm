function solution(friends, gifts) {
    const length = friends.length; 
    const interaction = Array.from({length}, () => Array.from({length}, () => 0));
    const giftDegree = Array.from({length}, () => 0);
    
    const receiveGift = Array.from({length}, () => 0);
    
    for(const gift of gifts){
        const [from, to] = gift.split(" ");
        
        interaction[friends.indexOf(from)][friends.indexOf(to)]++;
        giftDegree[friends.indexOf(from)]++;
        giftDegree[friends.indexOf(to)]--;
    }

    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(i === j || i > j) continue;
            
            if(interaction[i][j] > interaction[j][i]) receiveGift[i]++;
            else if(interaction[i][j] < interaction[j][i]) receiveGift[j]++;
            else {
                if(giftDegree[i] === giftDegree[j]) continue;
                
                giftDegree[i] > giftDegree[j] ? receiveGift[i]++ : receiveGift[j]++;
            }
        }
    }
    
    return Math.max(...receiveGift)
}