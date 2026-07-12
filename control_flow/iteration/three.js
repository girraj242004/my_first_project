/* Reverse a given number using a while loop.*/
let  n = 123
let rev =0
while(n>0){
    let digit = n%10
    n = Math.floor(n/10)
    rev = rev*10 +digit
}
console.log(rev)

//Check if a number is a palindrome using a while loop.
let num = 12321
let org_num = num
let reverse = 0
while(num>0){
    let digit = num%10
    reverse = reverse*10 + digit
    num = Math.floor(num/10)
}
if(reverse === org_num){
    console.log("Pallindrome")
}
else(
    console.log("Not palindrome")
)