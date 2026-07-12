// create an array
 const arr = [1, 2, 3]

 const sq = arr.map( (item) => {
    return item*item

 })
//  console.log(sq)
//  console.log(arr)

const name = [ "megha", "girraj", "priyal", "angel"]

const upper = name.map( (item) => {
    return item.toUpperCase()

})
// console.log(upper)

const myObject = [{
    name : "Megha",
    age : 22
}]

const obj = myObject.map( (item) => {
    return item.name
})
// console.log(obj)

const arrr = [1,2,3,4,5,6,7,8,9,10]
const newArr = arrr.filter((num) => {
    return num%2==0
})
// console.log(newArr)

const mob = [1, 2, 3, 4]
const ot = mob.reduce( function (prev, curr) {
return prev+curr
}, 0)
console.log(ot)
