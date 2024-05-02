function solution(num) {
    let steps = 0;
    while (num > 1) {
        if (num % 2 === 0) {
            num /= 2;
        } else if (num === 3 || num % 4 === 1) {
            num--;
        } else {
            num++;
        }
        steps++;
    }
    return steps;
}


console.log(solution(4));
console.log(solution(15));
