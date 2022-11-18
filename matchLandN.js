const string = "The five boxing wizards jump quickly."
let alpaRegex = /\w/g
let result = string.match(alpaRegex).length
console.log(result)

const numString = "Your sandwitch will $5.00"
let numRegex = /\D/g
let result2 = numString.match(numRegex).length
console.log(result2)

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const username = "JackOfAllTrades"
let userCheck = /^[A-Za-z]{2,}\d*$/
let result3 = userCheck.test(username)
console.log(result3)

// const ohstr = "Hazzzzzzah"
// let ohRegex = /^[A-Za-z]{1,1}.[~!@#$%^&*(){}?<>]{1,1}/
// let result4 = ohRegex.test(ohstr)
// console.log(result4)

