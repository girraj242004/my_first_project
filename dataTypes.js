// Primitive Data Type - 7
// String, number, boolean, null, undefined, symbol, bigInt
 

// let num;
// let point = 100.76
// let isFollow = false
//  const bigNumber = 1234567890123456789012345678901234567890n
// let outsideTemp = null
// //  name = "Girraj"
//  const id = Symbol("123")


// console.table([typeof num, typeof point, typeof isFollow, typeof bigNumber, typeof name, typeof outsideTemp, typeof id ] )

// Non-Premitive Data Types

// Array, Object, function

let arr = ["1,2,3,4,5"]
let Student = {
    name : "bob",
    age  : 18,
    Email : "alice.com"

};

const myFunction = function(){
    console.log("Hello")
}
console.table([typeof arr, typeof Student, typeof myFunction])
