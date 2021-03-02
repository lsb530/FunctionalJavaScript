function BlackDog() {
    this.name = '흰둥이';
    return {
        name: '검둥이',
        bark: function () {
            console.log(this.name + ': 멍멍!');
        }
    }
}
// 일반 함수의 this는 해당 객체 내부이고, 화살표 함수의 this는 { }안에 보다는 호출한 함수 자체?
const blackDog = new BlackDog();
blackDog.bark();

function WhiteDog() {
    this.name = '흰둥이';
    return {
        name: '검둥이',
        bark: () => {
            console.log(this.name + ': 멍멍!');
        }
    }
}

const whiteDog = new WhiteDog();
whiteDog.bark();

const test = () => {
    return console.log('하이');
};
test();

// 화살표 함수로 메서드를 정의하는 것은 피하자
// Bug: 나쁜 표현
const badperson = {
    name: 'Lee',
    sayHi: () => console.log(`HI ${this.name}`)
};
badperson.sayHi();

// Memo: 좋은 표현
const goodperson = {
    name: 'Lee',
    sayHi() { // === sayHi: function() {
        name: 'kim',
        console.log('Hi ' + this.name);
    }
};
goodperson.sayHi();