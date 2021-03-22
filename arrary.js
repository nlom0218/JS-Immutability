const arr = [1, 2, 3]
arr.push(4) // 기존 배열을 바꿈
console.log(arr); // [1,2,3,4]

const arr2 = arr.concat(5) // 기존 배열을 바꾸지 않음
console.log(arr, arr2); // [1,2,3,4], [1,2,3,4,5]
// or
const arr3 = [...arr, 5] // 이터러블 방식도 기존 배열을 바꾸지 않음
console.log(arr, arr3); //[1,2,3,4], [1,2,3,4,5]