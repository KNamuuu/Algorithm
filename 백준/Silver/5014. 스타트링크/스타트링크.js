const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [F, S, G, U, D] = input.split(" ").map(Number);

const direction = (floor) => {
    return [floor + U, floor - D];
};

const queue = [];
const visited = Array.from({ length: F + 1 }, () => false);

function bfs(floor, count) {
    queue.push([floor, count]);
    visited[floor] = true;

    while (queue.length > 0) {
        const [currentFloor, currentCount] = queue.shift();

        if (currentFloor === G) return currentCount.toString();

        for (const newFloor of direction(currentFloor)) {
            if (newFloor > 0 && newFloor <= F && !visited[newFloor]) {
                queue.push([newFloor, currentCount + 1]);
                visited[newFloor] = true;
            }
        }
    }

    return "use the stairs";
}

console.log(bfs(S, 0));
