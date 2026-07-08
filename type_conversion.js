let score = 33
let score1 = "33"

console.log(typeof score)
console.log(typeof score1)

let valueInNumber = Number(score1)
console.log(typeof valueInNumber)
// "33" => 33
// "33abc" => NaN
// true => 1

let isLoggedIn = 1
let isLoggedIn1 = Boolean(isLoggedIn)
console.log(typeof isLoggedIn1)
// 1 => true
// 0 => false
// "" => false
// "abc" => true

x = 4
y = x++
z = ++x
console.log(x, y, z)