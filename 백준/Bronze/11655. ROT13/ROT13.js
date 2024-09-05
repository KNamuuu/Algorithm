const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("");

const answer = input.map((char) => {
    if (char >= "A" && char <= "Z")
        return String.fromCharCode(((char.charCodeAt() - 65 + 13) % 26) + 65);
    else if (char >= "a" && char <= "z")
        return String.fromCharCode(((char.charCodeAt() - 97 + 13) % 26) + 97);
    else return char;
});

console.log(answer.join(""));
