import express from 'express'
import BancoDados from './config/database.js'
import router from './router/produto.js'

const app = express()
app.use(express.json())

app.use('/api/v1', router)

// iniciar o servidor
const porta = 3000

// conectar com o banco
BancoDados.db
    .sync({ force: false })
    .then(() => {
        app.listen(porta, () => {
            console.log("Servidor distribuindo doces na porta " + porta)
        })
    })
    .catch((e) => {
        console.log("Não foi possível conectar com o banco!")
    })
