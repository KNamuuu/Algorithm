const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const pokemons = input.splice(0, N);
const pokemonMap = new Map();
pokemons.forEach((pokemon, idx) => pokemonMap.set(pokemon, idx + 1));

const answer = [];
for (const line of input) {
    if (!isNaN(line)) answer.push(pokemons[Number(line) - 1]);
    else answer.push(pokemonMap.get(line));
}

console.log(answer.join("\n"));
