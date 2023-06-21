function countWays(N: number, X: number[]): number {
    let cache: number[] = new Array(N + 1).fill(-1);
    cache[0] = 1;
    return countWaysUtil(N, X, cache);
}

function countWaysUtil(N: number, X: number[], cache: number[]): number {
    if (N < 0) {
        return 0;
    } else if (cache[N] != -1) {
        return cache[N];
    } else {
        let ways = 0;
        for (let i = 0; i < X.length; i++) {
            ways += countWaysUtil(N - X[i], X, cache);
        }
        cache[N] = ways;
        return ways;
    }
}

let N = 4;
let X = [1, 2];
console.log(countWays(N, X)); // 5

N = 4;
X = [1, 3, 5];
console.log(countWays(N, X)); // 3