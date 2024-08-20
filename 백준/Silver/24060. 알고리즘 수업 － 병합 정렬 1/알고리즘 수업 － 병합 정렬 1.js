const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

let count = 0;
let target = -1;

function checkCount(arr) {
    if (count === K) target = arr[arr.length - 1];
}

function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) result.push(arr1[i++]);
        else result.push(arr2[j++]);

        count++;
        checkCount(result);
    }

    while (i < arr1.length) {
        result.push(arr1[i++]);
        count++;
        checkCount(result);
    }

    while (j < arr2.length) {
        result.push(arr2[j++]);
        count++;
        checkCount(result);
    }

    return result;
}

function merge_sort(arr) {
    if (arr.length === 1) return arr;

    let mid = Math.ceil(arr.length / 2);
    let left = merge_sort(arr.slice(0, mid));
    let right = merge_sort(arr.slice(mid));

    return merge(left, right);
}

merge_sort(arr);

console.log(target);
