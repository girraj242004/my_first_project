// Dates
let myDate = Date();
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// // create date 

// let dateCreated = new Date (2004, 5, 24  );
// let dateCreated = new Date (2004, 5, 24 , 9, 35 )
// let dateCreated = new Date ("2004-06-24");

// console.log(dateCreated.toLocaleString())

//********************** Time ************************/
let myTimeStamp = new Date ();
// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp/1000)) // convert to seconds
console.log(`${(myTimeStamp.getDate() )} ${(myTimeStamp.getMonth() + 1)} ${(myTimeStamp.getYear() )}` )