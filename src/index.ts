import { cursorTo } from "readline"

let numero:number = 10
let palavra:String = "TERE"
let bol: boolean = true


let x:Number|string = 10
x = "TERE"

const vetor:number[] = [1,2,3,4,5] //const é de constante q n podese ser mudado o vetor , mas sim os numero dentro
vetor[2] = 10
vetor.push(6)

console.log(vetor)
//vetor = [5,6,7,8,9]

let vetorString:String[] = ["p","c","pc"]

type Pessoa={
    id?:number
    ;nome:string
    ;idade:number
}

const pessoa:Pessoa ={
    id:1,
    nome:"Pedro Duam Cabaleiro",
    idade:999
}
const pessoa2:Pessoa ={
    //id:1, id? faz ele fica opicional
    nome:"Paulinho do Grau",
    idade:19
}

pessoa.nome = "Renato Garcia Do Matos"

const PotatoFly = []

const PotatoNuclear:undefined = undefined

function Terelindo(nome:string):string{
    return `${nome} Lindo :3`
}

const func = Terelindo
func('tere')

// express funciton
const func2 =  function (nome:string):void{
    console.log(`${nome} Lindo :3`) 
}

func2('teRe')

//serviço de preguiçoso
//  so funciona com uma linha.
const func3 = (nome:string):void =>
    console.log(`${nome} Lindo :3`)

func3('Tere')


function SomaVetor(v:number[]){
    let soma = 0
    for( let i = 0; i < v.length; i++){
        soma = soma + v[i]!
    }
    return soma
}

function somavetor(v:number[]):number{
    const soma = v.reduce((prev,curr)=>prev+curr,0)
    return soma
}


//faça uma função que receba um vetor e devolva a soma 
//dos valores pares
function somaPar(b:number[]):number{
    let soma = 0
    for( let i = 0; i < b.length; i++){
        if(b[i]!%2==0){
            soma = soma + b[i]!
        }
    }
    return soma
}

console.log(`o valor da somapar é ${somaPar([1,2,3])}`)

//faça um função receba dois vetores e retorna 
//um novo vetor com todos os valores passado.
//exemplos func merge ([123]),([456]) retorne [1,2,3,4,5,6]

 function merge(A:number[], B:number[]):number{
    let resultado =[], A = 0, B = 0;
    while
 }




   



function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}









// import express from 'express';

// const app = express();
// app.use(express.json()); // O Chef agora entende pedidos em formato JSON

// // Rota de teste
// app.get('/', (req, res) => {
//     res.send("Servidor Node + TS rodando com sucesso!");
// });

// app.listen(8000, () => {
//     console.log("🚀 Servidor online está rodando na porta 8000");
// });

