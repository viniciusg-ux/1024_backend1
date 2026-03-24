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

 //MAP MAPEIA
console.log(vetor2.map((v)=>v.idade))




// Obtém o cliente
import mysql from 'mysql2/promise';

// Cria a conexão com o Banco de Dados
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
});

// Utilizando espaços reservados (placeholders)
try {
  const queryPrepare = await connection.prepare(
    'SELECT * FROM `pessoa`'
  );
const results = queryPrepare.execute([])
  console.log(results);
} catch (err) {
  console.log(err);
}

*/
 //Get the client
import mysql, { type RowDataPacket, type Connection } from 'mysql2/promise';


import express from 'express';
const app = express()


//Como cria uma rota no express?
app.get("/pessoas", async (req,res)=> {
    let connection: Connection | null = null
    try {
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'luademel',
});


// Using placeholders


//   const result =
//     await connection
//     .execute('INSERT INTO pessoa (id,nome) VALUES (?,?)',[3,"Maria"])
//   console.log(result)


  const [dados,campos] = await connection.execute<IPessoa[]>('SELECT * FROM pessoa')
  res.status(200).json(dados)


      await connection.end();
} catch (err) {
    //TODO:
    console.log(err);
    if(connection){
        await (connection as Connection).end();
        }
    }
})
app.post("/pessoas",(req,res)=>{
    //pegar as informações do usuario =>REQ.body
    //conectar com o banco
    //inserir
    //retonrnar algo que indique que deu certo
 })

app.listen(8000,()=>{
    console.log("Iniciando o servidor na porta 8000")
})


interface IPessoa extends RowDataPacket{
    id:number,
    nome:string,
}

