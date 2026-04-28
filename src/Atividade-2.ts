/*1......
Crie uma rota '\cliente_data_pedido' que retorne os clientes e a data que os mesmos fizeram 
o pedido. Para realizar isso, utilize o comando inner join para juntar as tabelas. 
Utilize o banco de dados chamado  dbteremercado

SELECT nome,datapedido FROM clientes c 
                     INNER JOIN pedidos p ON c.idclientes=p.clientes_idclientes

2 Crie uma rota chamada '\pedidos_2026' que retorne 
idclientes, nome, cidade, idade,idpedidos,datapedido dos pedidos feitos no ano
de 2026.

3.Crie uma rota chamada '\quantidade_pedidos' que retorne 
um json no formato '{quantidade_pedidos:100}' com a quantidade de pedidos cadastrados
na tabela pedidos. USE O COMANDO COUNT(*) para contar as quantidades.

4 Crie uma rota chamada '\quantidade_pedidos_clientes' que retorne
um json no formato '[{nome:"tere",quantidade_pedidos:1000}]' que retorne 
todos os clientes e a quantidade de pedidos que cada cliente fez*/

import mysql, { type RowDataPacket, type Connection, type ResultSetHeader } from 'mysql2/promise';
import MysqlErrorHandle from './mysql_error_handle.js';
import express from 'express';
const app = express()
app.use(express.json())


interface ICliente extends RowDataPacket {
    id_cliente: number,
    nome: string,
    cidade: string,
    idade: number,
}


const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'dbteremercado',
});

app.get("/cliente_data_pedido", async (err ,res) => {
    try {
        const [dados, ] =
            await connection.execute<Icliente[]>('SELECT FROM cliente')
        res.status(200).json(dados)
    } catch (err) {
        const mysqlErrorHandle = new MysqlErrorHandle(err, res)
        mysqlErrorHandle.validar()

    }
})