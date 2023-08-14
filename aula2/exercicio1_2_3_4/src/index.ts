import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get("/texto/:nome/:index", (req, res) => {
    let { nome, index } = req.params


    const indice = parseInt(index);
    if (indice >= 0 && indice < nome.length) {

        const resposta: string = nome[indice]

        res.status(200).json({ "letra": resposta });
    }

    res.status(400).json({ "message": "Índice incorreto" })


})

app.get("/texto", (req, res) => {
    const { nome, index } = req.body;

    if (index >= 0 && index < nome.length) {

        const resposta: string = nome[index]

        res.status(200).json({ "letra": resposta });
    }

    res.status(400).json({ "message": "Índice incorreto" })
})

app.use((req, res) => res.status(404).json({ "message": "URL desconhecida" }))

app.listen(PORT, () => { console.log(`Servidor rodando na porta:${PORT}`) })