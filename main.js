import express from "express"
import cors from "cors"

const app = express()
app.use(express.json()) //Configura para aceitar / receber / ler dados
app.use(cors()) //Middleware para controlar requisições

app.get("/", (request, response) => {
    return response.json('Resposta do servidor')
})

app.listen(4000, () => {
    console.log('Servidor funcionando!')
})