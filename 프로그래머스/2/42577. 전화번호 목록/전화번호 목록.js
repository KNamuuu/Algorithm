function solution(phone_book) {
    var answer = true;
    
    // phone_book..sort((a, b) => a - b);
    
    // phone_book.map((item) => Number(item)).sort((a, b) => a - b).map((item) => item.toString());
    phone_book.sort();
    
    console.log(phone_book);
    
    for(let i = 0; i < phone_book.length - 1; i++) {
        if(phone_book[i + 1].startsWith(phone_book[i])) return false;
    }
    
    return answer;
}