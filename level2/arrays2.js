const marvel_heros = ["Ironman", "Spiderman", "Hulk", "Thor", "Captain America"]
const  dc_heros = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"]

let all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]
let arr3 = [9, 10]

console.log(...arr1, ...arr2, ...arr3)

let newarr = [1,2,[3,4,[5,6],7,8],9]
console.log(newarr.flat(Infinity))

console.log(Array.isArray("Girraj"))
console.log(Array.from("Girraj"))
console.log(Array.of(arr1, arr2, arr3).flat(Infinity))