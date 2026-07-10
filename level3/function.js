function myName (){
    //console.log("Hello JavaScript")
}
myName()

function twoSum(num1, num2){
    console.log(num1 + num2)
}
// twoSum(3, 4)

function multiTwoNum (num1, num2){
    return num1*num2
}
const result = multiTwoNum(2, 3)
// console.log("Result : ",result)

function liginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} logged in `
}
// console.log(liginUserMessage())


// object function
const user = {
    username : "megha@123",
    age : 31
}
function myObjFunction(anyObject){
    return `my user name is ${anyObject.username} and  age is ${anyObject.age}`
}
// console.log(myObjFunction(user))

// object array 
const array = [100, 200, 300, 400]
function newarray(anyarray){
    return anyarray[1]
}
console.log(newarray(array))