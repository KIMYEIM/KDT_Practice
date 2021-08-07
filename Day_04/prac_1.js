function solution(numbers) {
    numbers = numbers.map(a => a + "")
    numbers.sort((a, b) => {
        let aFirst = a+b;
        let bFirst = b+a;
        if (bFirst > aFirst) return 0;
        else return -1;
    });
    if (numbers[0] == 0) return '0';
    return numbers.join('');
}
/*
11번 테케 때문에 엄청 오래걸렸다,,,
문제 조건을 제대로 읽고 엣지 케이스를 생각하자
*/