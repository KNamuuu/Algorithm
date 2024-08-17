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
    
    char["R"] >= char["T"] ? answer += "R" : answer += "T";
    char["C"] >= char["F"] ? answer += "C" : answer += "F";
    char["J"] >= char["M"] ? answer += "J" : answer += "M";
    char["A"] >= char["N"] ? answer += "A" : answer += "N";
    
    return answer;
}