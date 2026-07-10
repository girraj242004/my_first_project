// object literals

const mySym = Symbol("key1")
const JsUser = {
    name : "Girraj",
    age : 22,
    [mySym] : "myKey1",
    location : "Shivpuri",
    email : "girrajagrawal2004@gmail.com",
    isLoggedIn : false,
    lastLogInDays:["monday", "saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])
// JsUser.email = "girraj242004.com"
// Object.freeze(JsUser)
// JsUser.email = "girraj@gmail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greetingTwo())

// object function



