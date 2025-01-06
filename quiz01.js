let uninitialized;
console.log(uninitialized); // 결과값 < undefined >, 변수 값이 초기화되지 않았기 때문


const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable , 


let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 > , index값 3번은 19이기 때문에



let mySchedule = "";
console.log(mySchedule || false); // < false > , mySchedule운 빈문자열이기 때문에 false이고 false와 or로 비교하면 false이기 때문
console.log(!!mySchedule); // < false > , !!는 원래의 boolean값을 의미하므로 false