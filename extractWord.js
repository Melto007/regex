let extractStr = "Extract the word 'Coding' from this string"
let codingRegex = /coding/i
let result = extractStr.match(codingRegex)

let twinkleStar = "Twinkle, Twinkle, little Star"
let twinkleRegex = /twinkle/ig
let twinkleResult = twinkleStar.match(twinkleRegex)
console.log(twinkleResult)

let testStr = "Beware of the bugs in the above code; I Have only proved it correctly"
let ourRegex = /[a-z]/ig
let testResult = ourRegex.test(testStr)
console.log(testResult)

let quoteSample = "Blackberry 3.141453345s are delicious"
let myRegex = /[^0-9aeiou]/ig
let quoteResult = quoteSample.match(myRegex)
console.log(quoteResult)
