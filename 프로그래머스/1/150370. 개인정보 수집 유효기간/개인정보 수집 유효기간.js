function solution(today, terms, privacies) {
    var answer = [];
    
    const [todayYear, todayMonth, todayDate] = today.split(".").map(Number);
    const termsObject = Object.fromEntries(terms.map((el) => el.split(" ")));
    
    for(let i = 0; i < privacies.length; i++) {
        const [privacyDate, term] = privacies[i].split(" ");
        
        let [year, month, date] = privacyDate.split(".").map(Number);
        
        month += Number(termsObject[term]);
        date -= 1;
        
        if(date < 1) {
            month -= 1;
            date = 28;
        }
        while(month > 12) {
            month -= 12;
            year += 1;
        }
        
        if(year < todayYear) answer.push(i + 1);
        else if(year === todayYear && month < todayMonth) answer.push(i + 1);
        else if(year === todayYear && month === todayMonth && date < todayDate) answer.push(i + 1);
    }
    
    return answer;
}