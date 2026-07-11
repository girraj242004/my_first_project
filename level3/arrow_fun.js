const user = (num1, num2) => {
    return num1+num2
}
// console.log(user(3, 5))

const users = {
    username : "hitesh",
    price : 999,
    welcomMessage : function(){
    console.log(`${this.username} , welcom to website`)
}
}
// users.welcomMessage()
// users.username = "Sam"
// users.welcomMessage()

const chai = () => {
    let username = "Hitesh"
    // console.log(this.username)
}
chai()

