import express from 'express';

const app = express();
app.use(express.json()); // O Chef agora entende pedidos em formato JSON

// Rota de teste
app.get('/', (req, res) => {
    res.send("Servidor Node + TS rodando com sucesso!");
});

app.listen(8000, () => {
    console.log("🚀 Servidor online está rodando na porta 8000");
});