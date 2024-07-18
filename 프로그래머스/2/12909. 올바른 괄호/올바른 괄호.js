function solution(s){   
    let tmp = 0;
    
    for(const char of s){
        if(tmp < 0) return false;
        
        if(char === "(") tmp++;
        else tmp--;
    }

    return tmp === 0;
}