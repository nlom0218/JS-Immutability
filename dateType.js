const p1 = 1
const p2 = 1
console.log(p1 === p2); // true

const o1 = { name: "kim" }
const o2 = { name: "kim" }
console.log(o1, o2, o1 === o2); // false
// 객체(object, array, function)는 변할 수 있는 값이다.

const o3 = o1
o3.name = "lee"
console.log(`o1: ${o1.name}, o3: ${o3.name}`, o1 === o3) // true
// 객체 o3의 name를 바꾸었지만 덩달아 o1의 name또한 바뀜
// 왜냐 위에서 설명한 것 처럼 객체는 언제든지 변할 수 있기 때문이다.

const o4 = Object.assign({}, o2)
o4.name = "park"
console.log(`o2: ${o2.name}, o4: ${o4.name}`);
// Object.assign 메서드를 사용하여 여러 개의 객체를 병합하거나 특정 프로퍼티를 변경 또는 추가 가능

const o5 = { ...{}, ...o2 }
console.log(o2 === o5); // false
o5.name = "hello"
console.log(`o2: ${o2.name}, o5: ${o5.name}`);
// 또한 최신 문법에서는 Object.assign 메서드 대신 스프레드 문법을 사용하여 변경 또는 추가 할 수 있다.{}

const v1 = { name: "kim", score: [1, 2] }
const v2 = { ...{}, ...v1 }
console.log(v1 === v2, v1.score === v2.score); // false true 
// 이 상태에서 v1과 v2의 스코어의 값은 같음 배열을 가진다.
// 즉 한 쪽의 배열이 달라지면 같이 달라진다.
v2.score = v1.score.concat()
console.log(v1 === v2, v1.score === v2.score) // false false
// concat 메서드를 사용하면 다른 배열을 가진다.
// 이때엔 한 쪽의 배열이 바뀐다 해도 다른 쪽 배열은 달라지지 않는다.
v2.score.push(3)
console.log(`v1: ${v1.score}, v2:${v2.score}`);