const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Middleware para analisar o corpo das requisições como JSON, faz o servidor entender json

app.get("/bolos", (req, res) => {
    res.json([
        { nome: "Bolo de Chocolate", preco: 45 },
        { nome: "Bolo de Cenoura", preco: 35 },
        { nome: "Bolo de Morango", preco: 55 }
    ]);
});

app.post("/pedidos", (req, res) => {
    console.log("Pedido recebido pelo backend:", req.body);
    const nomeDoBolo = req.body.nomeDoBolo;

    if (!nomeDoBolo) {
        return res.status(400).json({
            mensagem: "Informe o nome do bolo!"
        });
    }

    res.json({
        mensagem: "Pedido recebido com sucesso!",
        bolo: nomeDoBolo
    });
});


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
