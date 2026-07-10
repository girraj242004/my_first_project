const tinder = new Object() // singleton object

const binder = {} // non singleton object 
// console.log(binder)


tinder.id = "123abc"
tinder.name = "Tinder"
tinder.isFollow = false
// console.log(tinder)


const regularUser = {
    email : "samay@gmail.com",
    fullname:{
        userfullName :{
            firstname : "Samay",
            lastname : "Raina"
        }
    }
}
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullName)
// console.log(regularUser.fullname.userfullName.lastname)

const obj1 = {
    1: "a",
    2 : "b"
}
const obj2 = {
    3: "a",
    4 : "b"
}

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)
const obj4 = {...obj1, ...obj2}
// console.log(obj4)

// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))
// console.log(tinder.hasOwnProperty("id"))

const course ={
    course_name : "java",
    fees : 999,

}
// de-structure object
const {course_name : cn} = course
console.log(cn)
