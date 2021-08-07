function solution(number, k) {
    let stack = [];
    let count = k;
    for (const num of number) {
        if (num <= stack[stack.length - 1]) stack.push(num);
        else {
            while (count > 0 && stack[stack.length - 1] < num) {
                stack.pop();
                count--;
            }
            stack.push(num);
        }
    }
    while (count > 0) {
        stack.pop();
        count--;
    }
    return stack.join('');
}