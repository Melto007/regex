const sentence = "The dog chased the cat"
let regex = /the/

let myString = "Hello World"
let myRegex = /hello/i
let result = myRegex.test(myString)
console.log(result)

let petString = "Melto has a pet dog"
let petRegex = /dog|cat/
let petResult = petRegex.test(petString)
console.log(petResult)