// let h = "alireza"
// let y = 5+10
// console.log(h,"a ages is:",y)

let myName = "Alireza"
let myFamily = "hosseini"
let myAge = "15"
console.log('\n my name is: ' + myName + ' ,\n my family name is: ' + myFamily + ' ,\n my age is: ' + myAge)
// console.log('my name is:${myName} my family name is:${myFamily} my age is :${MyAge}
let arr = ["alireza", "hoseini sabet", "is", "15"]
// console.table(arr)
let j = { myName: myName, myFamily: myFamily, myAge: myAge }
console.table(j)
console.log(typeof myAge, typeof j)
j.myAge = 911
console.table(j)