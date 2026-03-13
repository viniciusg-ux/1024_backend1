//mport { cursorTo } from "readline"

//import { Resolver } from "node:dns"

//import { rejects } from "node:assert"
//import type { promises } from "node:dns"

/*let numero:number = 10
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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function criaNovoVetor5(vetor:number[]){
   const v = vetor.map(x=>x**2+10)//cria uma copia do vetor (MAP) e da pra multiplicar
   return v
}
console.log(criaNovoVetor5([1,2,3]))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//conteúdo de hoje => Promisses

//xxxxxxxx => 10s => yyyyy
//pode dar certo ou errado! mas sempre tem retorno



//Assincrona?
function minhaPromessa():Promise<string>{
    const prom:Promise<string> = new Promise<string>((resolve,rejects)=>{
        setTimeout(()=>resolve("tere1"),5000)
    })
    return prom
}
minhaPromessa().then((valor)=>console.log(valor))//mostra o valor
console.log(minhaPromessa())// mostrar pending
console.log("executei essa codigo")


function minhaPromessa2():Promise<string>{
    const prom:Promise<string> = new Promise<string>((resolve,rejects)=>{
        setTimeout(()=>rejects("tere2  Erro"),5000)
    })
    return prom
}
minhaPromessa2()
.then((valor)=>console.log(valor))
.catch((erro)=>console.log(erro))
console.log("executei essa codigo")

try{
   const resultado = await minhaPromessa2()
   console.log(resultado)
}
catch(erro){
    console.log(erro)
}


//crie uma função que tenha 50% de chance de retornar tere 
// 5 segundos ou a função devolva o valor null
//function devolvetere()

function devolvetere():Promise<string|null>{
    const delv = new Promise<string>((resolve,rejects)=>{

        if(Math.random()>=0.5){
            setTimeout(()=>console.log("O TERE"),5)
        }else{
        return null
    }
    })    
    return delv
}
   
devolvetere()
///////////////////////////////////////////////////////
function devolvetere3():Promise<string|null>{
    const delv:Promise<string> = new Promise<string>((resolve,rejects)=>{

        if(Math.random()>=0.5){
            setTimeout(()=>resolve("O TERE"),5)
        }else{
        rejects(null)
    }
    })    
    return delv
}
try{
const delvo = await devolvetere3()
console.log(delvo)
}
catch(erro){
console.log(erro)
}
*/

 const vetor:number[] = [1,2,3,4];
 const vetor2:{id:number,nome:string,idade:number}[]=[

    {id:1,nome:"tere",idade:32},
    {id:3,nome:"João",idade:10},
    {id:5,nome:"vitor",idade:72},
 ]
 //FIND
 console.log(vetor2.filter((v)=>v.idade>=18))
 console.log(vetor2.find((v)=>v.idade>=18))
 console.log(vetor.find((x)=>x===4))
/////////////////////////////////////////////////////////////////////////////////////////////////////
//ATIVIDADE DO TERE

/* 
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Prim-eiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 

//Início do seu código


function criaNovoVetor(v:number[], Valor1:number, Valor2:number):number[]{
    const resultado:number[] = []

    for( let i = 0; i < v.length; i++){
        resultado.push(v[i]!)
    }
    resultado.push(Valor1)
    resultado.push(Valor2)
    
    return resultado
}


const Valor1 = criaNovoVetor([1, 2, 3], 4, 5)
console.log(`Novo vetor é: ${Valor1}`)

const Valor2 = criaNovoVetor([6, 7, 8], 9 ,10)
console.log(`Novo vetor é: ${Valor2}`)
const resultado = criaNovoVetor([1, 2, 3, 4, 5], 6, 7)
console.log(`Novo vetor é: ${resultado}`)


console.log(`Novo vetor é: ${Valor2}`)

*/
//Fim do seu código

/*
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 

//Início do seu código
function divisivelPor11(Minimo:number , Maximo:number){
    const vetorDivisiveis11:number[] = []
    for( let i = Minimo; i < Maximo; i++){
        if(1%11===0){
            vetorDivisiveis11.push(i)
        }
    }
    return vetorDivisiveis11
}
*/
//Fim do seu código

/*
 *  Exercício 03 - maioresDeIdade
 * Nome da função - maioresDeIdade
 * Crie uma função que retorna um array com os objetos com idade maior que 18
 * @param {vetor:Pessoa[]} vetor Vetor de objetos com id, nome e idade
 * @returns {Pessoa[]} Retorna um array com os objetos com idade maior que 18
 * @example
 * 
 * const pessoa1 = {id: 1, nome: 'João', idade: 20}
 * const pessoa2 = {id: 2, nome: 'Maria', idade: 18}
 * const pessoa3 = {id: 3, nome: 'José', idade: 17}
 * maioresDeIdade([pessoa1, pessoa2, pessoa3]) // [pessoa1, pessoa2]
 
interface Pessoa{
    id: number,
    nome: string,
    idade: number
}

//Início do seu código


//Fim do seu código


function criaNovoVetor2(vetor:number[], valor1:number, valor2:number){
    return [...vetor,valor1,valor2]
}
console.log(criaNovoVetor2([1,2,3],0,0))
///
function criaNovoVetor3(vetor:number[], valor1:number, valor2:number){
   const v = vetor.map(x=>x*1)//cria uma copia do vetor (MAP) e da pra multiplicar
   v.push(valor1,valor2)
   return v
}
console.log(criaNovoVetor3([1,2,3],0,0))
////
function transformar(x:number){
    return x*2
}
function criaNovoVetor4(vetor:number[], valor1:number, valor2:number){
   const v = vetor.map(transformar)//chamando a função dentro da função
   v.push(valor1,valor2)
   return v
}
console.log(criaNovoVetor4([1,2,3],0,0))
*/