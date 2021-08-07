function solution(n, times) {
    times.sort((a, b) => b - a);
    let low = 1;
    let high = times[0] * n;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let total = 0;
        for (let i = 0; i < times.length; i++) {
            total += Math.floor(mid / times[i]);
        }
        if (n > total) low = mid + 1;
        else high = mid - 1;
    }
    return low;
}