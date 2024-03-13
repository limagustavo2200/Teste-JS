/* 
Desafio 5
*/

let string = "Contratado para Estagiario"
let novaString = ""
let aux = ""

for (let i = string.length - 1; i >= 0; i--) {
    aux = string[i]
    //console.log(temp)
    novaString = novaString + aux
}
console.log(`A string original é ${string}`)
console.log(`A string invertida é ${novaString}`)


