//삼항연산자를 통해 num을 2로 나눴을 때 0이면 짝수를 아니면 홀수를 반환하게 만들었습니다.
function numDet(num) {
    // 코드를 작성해 주세요.
    let result = num % 2 === 0 ? '짝수' : '홀수'
    return result
}

console.log(numDet(10)); // 결과값 "짝수";
console.log(numDet(7)); // 결과값 "홀수";