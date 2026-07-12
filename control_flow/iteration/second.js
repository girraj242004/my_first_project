/*for loop
Write a program to print the sum of numbers from 1 to 100 using a for loop.

Print all prime numbers between 1 and 50 using a for loop.*/
const n = 100
let sum = 0
for ( let i =1; i<=n ;i++){
    sum+=i
}
console.log(sum)

for( let num = 2; num<=50;num++){
let isPrime = true
for (let i=2;i<(num);i++){
    if (num%i==0){
        isPrime = false
        break;
    }
  
}
if (isPrime){
    console.log(num)
}
}