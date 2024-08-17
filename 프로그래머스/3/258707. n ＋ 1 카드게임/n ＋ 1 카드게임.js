function getCombinations (arr, selectNum) {
    if(selectNum === 1) return arr.map((el) => [el]);
    
    const result = [];
    
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1)
        const combinations = getCombinations(rest, selectNum - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        result.push(...attached);
    })
    
    return result;
}

function solution(coin, cards) {    
    const arr = cards;
    const target = cards.length + 1;
    
    let myCards = arr.splice(0, cards.length / 3);
    let temp = [];
    
    let round = 1;
    let usedCoin = 0;
    
    while(true){
        if(arr.length < 2) break;
        
        temp.push(arr.shift());
        temp.push(arr.shift());
        
        const combinations = getCombinations([...myCards, ...temp], 2);
        let foundPair = false;
        
        for(const combination of combinations) {
            const [a, b] = combination;
            
            let needCoin = 0;
            if(temp.includes(a)) needCoin++;
            if(temp.includes(b)) needCoin++;
            
            if ((needCoin + usedCoin) > coin) continue;
            
            if(a + b === target) {
                if(myCards.includes(a)) myCards = myCards.filter((el) => el !== a);
                else temp = temp.filter((el) => el !== a);
                
                if(myCards.includes(b)) myCards = myCards.filter((el) => el !== b)
                else temp = temp.filter((el) => el !== b);
                
                usedCoin += needCoin;
                round++;
                foundPair = true;
                break;
            }
        }
        if(!foundPair) break;
    }
    
    return round;
}