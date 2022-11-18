let string = "titanic"
let regex = /t[a-z]*?i/ //lazy matching
const result = string.match(regex)
console.log(result)

let test = "<h1>Winter is coming</h1>"
let testRegex = /<.*?>/
const result2 = testRegex.test(test)
console.log(result2)

let crowd = 'P1P2P3P4P5P6CCCP7P8P9'
let crowdregex = /C+/
let crowdResult = crowd.match(crowdregex)
console.log(crowdResult)

let carboose = "The last car on a train is the caboose"
let startRegex = /^the/i
let lastRegex = /caboose$/i
const result3 = startRegex.test(carboose)
const result4 = lastRegex.test(carboose)
console.log(result3)
console.log(result4)
