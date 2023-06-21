function shortest_dist(s: string, c: string): number[] {
    let result: number[] = new Array(s.length);
    let prev = -Infinity;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            prev = i;
        }
        result[i] = i - prev;
    }
    prev = Infinity;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === c) {
            prev = i;
        }
        result[i] = Math.min(result[i], prev - i);
    }
    return result;
}

console.log(shortest_dist('helloworld', 'l')); // [2, 1, 0, 0, 1, 2, 2, 1, 0, 1]