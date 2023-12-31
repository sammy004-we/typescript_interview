function smallest_subarray_with_given_sum(s: number, arr: number[]): number {
    let windowSum = 0,
        minLength = Infinity,
        windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        while (windowSum >= s) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
}

console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])); // 2
console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])); // 1