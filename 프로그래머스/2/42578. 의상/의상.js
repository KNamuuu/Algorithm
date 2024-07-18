function solution(clothes) {
    var answer = 1;
    
    const numberOfType = {};
    
    for(const [name, type] of clothes) {
        numberOfType[type] = numberOfType[type] ? numberOfType[type] + 1 : 1;
    }
    
    const keyValueArr = Object.entries(numberOfType);
    
    // console.log(keyValueArr);
    for(const [type, num] of keyValueArr) {
        answer = answer * (num + 1);
    }
    
    return answer - 1;
}