/* 
var

const

let
regras
uma variavel não pode ter 
espaço, começa com numero, acentuação, nem usar palavras chaves da linguagem

*/ 

let nome = "Gustavo Vieira "
nome = "Kayo malafaia"
console.log(nome)

let idade = 35
let idade2 = "35"
const iguais = idade == idade2
console.log(typeof idade)
console.log(typeof idade2)
console.log(iguais)

// variaveis compostas 
// array e objetos
//   []   e   {} 
// const listaDeFrutas =[
// "Morango",
// "Banana",
// "Abacaxi",
// 123,
// ]
// console.log(typeof listaDeFrutas)
// console.log(listaDeFrutas)

// listaDeFrutas.push()

// listaDeFrutas.log()

// listaDeFrutas.pop()

const pessoas = [25,36,32,45,66,68,24,62,17]
const fila = []

/* 
loop é um ciclo de perguntas
for 
*/ 

pessoas.sort()
const tamanho = pessoas.length
// 1° primeira posição variavel
// 2° posição pergunta condicional
// 3° posição incremento ou decremento
for(let i = 0;i <= tamanho;i++){
  
if(pessoas [i] >= 65){
    fila.unshift(pessoas[i])
}else{
 fila.push(pessoas[i])
}
}
console.log(fila)

// objetos
// {}
// dicionario
const pessoa = {
"nome":"Kayo Malfaia"
}

console.log(pessoa)
console.log(pessoa.nome)
pessoa.idade = 16
console.log(pessoa)
pessoa.vivo = true
console.log(pessoa.idade)

const pessoa2 = {
    "nome":"Gustavo vieira",
    "idade": 19,
    "vivo":true
}
console.log(pessoa2)

const pessoa3 = {
    "nome" : "luan",
    "idade": 26,
    "vivo": true
}
console.log(pessoa3)

console.log(fila)
for(let i=0;i < tamanho; i++){
    fila.pop()
}
console.log(fila)

pessoa.votos = 2
pessoa2.votos = 5
pessoa3.votos = 5
fila.push(pessoa)
fila.push(pessoa2)
fila.push(pessoa3)
console.log(fila)

console.log(fila[2])
console.log(`Quantida de votos ${fila[2].votos}`)
