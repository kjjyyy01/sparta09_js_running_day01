function calculate(firstNum, operator, secondNum) {

    //switch
    // switch (operator) {
    //     case '+':
    //         return firstNum + secondNum;
    //         break;
    //     case '-':
    //         return firstNum - secondNum;
    //         break;
    //     case '*':
    //         return firstNum * secondNum;
    //         break;
    //     case '/':
    //         return firstNum / secondNum;
    //         break;
    //     default:
    //         return "error"
    // }

    //if-else-if
    // if (operator === '+') {
    //     return (firstNum + secondNum);
    // } else if (operator === '-') {
    //     return (firstNum - secondNum);
    // } else if (operator === '*') {
    //     return (firstNum * secondNum);
    // } else if (operator === '/') {
    //     return (firstNum / secondNum);
    // }

    //if
    if (operator === '+') {
        return (firstNum + secondNum);
    }
    if (operator === '-') {
        return (firstNum - secondNum);
    }
    if (operator === '*') {
        return (firstNum * secondNum);
    }
    if (operator === '/') {
        return (firstNum / secondNum);
    }
}
console.log(calculate(3, "+", 6));  // 결과값 9
console.log(calculate(11, "-", 6)); // 결과값 5
console.log(calculate(6, "*", 3));  // 결과값 18
console.log(calculate(15, "/", 3)); // 결과값 5