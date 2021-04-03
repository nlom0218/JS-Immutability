// freez 메서드를 사용하여 객체를 얼려버리기
const person = { name: "kim", score: [1, 2] }
Object.freeze(person)

person.name = "lee" // 바뀌지 않는다.
person.score.push(3)
console.log(person); // 하지만 값이 배열이 것은 바뀐다.

Object.freeze(person.score) // 배열까지 얼려버러기
person.score.push(4) // TypeError: Connot add property 3, object is not extensible 