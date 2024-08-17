function solution(survey, choices) {
    var answer = '';
    const char = {
        "R": 0,
        "T": 0,
        "C": 0,
        "F": 0,
        "J": 0,
        "M": 0,
        "A": 0,
        "N": 0
    }
    
    for(let i = 0; i < survey.length; i++) {
        const [a, b] = survey[i].split("");
        const choice = choices[i] - 4;
        
        if(choice === 0) continue;
        
        choice > 0 ? char[b] += choice : char[a] += Math.abs(choice);
    }
    
    function compare(c1, c2){
        return char[c1] >= char[c2] ? c1 : c2;
    }
    
    answer += compare("R", "T");
    answer += compare("C", "F");
    answer += compare("J", "M");
    answer += compare("A", "N");
    
    return answer;
}