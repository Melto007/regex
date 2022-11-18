let difficultspelling = "Mississippi"
let spellRegex = /s+/ig
let spellResult = difficultspelling.match(spellRegex)
console.log(spellResult)

let soccerword = 'gooooooat'
let gPhrase = 'gut feeling'
let oPhrase = 'over the moon'
let goRegex = /go*/
const result1 = soccerword.match(goRegex)
const result2 = gPhrase.match(goRegex)
const result3 = oPhrase.match(goRegex)
console.log(result1)
console.log(result2)
console.log(result3)