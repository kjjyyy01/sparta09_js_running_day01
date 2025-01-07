//아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.

//B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.

//1. 실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
// userBCart.item과 userACart.items은 5000원씩 할인된 가격일거 같다.

//2. 1번의 결과에 대한 이유를 설명해보세요.
//applyCoupon함수가 선언될 때 userBCart에 userACart가 복사되었고 userBCart가인수로 호출되었다. applyCoupon함수에서 forEach를 통해 item.price를 각각 불러와어서 coupon객체 안에 있는discount를 5000원씩 했기 때문입니다.

//3. 원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
//userBCart를 따로 만들어 주소값을 다르게 가지게하여 동작시키면된다. //깊은복사, 얕은복사에 대해 다시 공부하기!! 말로 풀어서 쓰고 용어는 모름

//순서도
//1. userBCart객체를 만든다.
//2. userBCart객체에 있는 프로퍼티들을 복사해온다.
//3. userBCart에 coupon을 적용 시킨다.
// => userACart와 userBCart는 서로 다른 객체가 된다.(= 주소값이 달라진다.)

function applyCoupon(cart, coupon) {
    cart.items.forEach((item) => {
        item.price -= coupon.discount;
    });
}

const userACart = {
    items: [
        { name: "키보드", price: 30000 },
        { name: "마우스", price: 20000 },
    ],
};

const userBCart = {
    items: userACart.items.map((item) => ({ ...item })),
}


// const userBCart = structuredClone(userACart);

const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

console.log(userACart);
console.log(userBCart);