import express, { request, response } from "express"
import sequelize from "./src/database/sequelize.js"
import User from "./src/models/user.js"
import { connection } from "./src/database/mysql-connect.js"


const app = express()
const router = express.Router()

app.get('programming-languages', async (request, response) => {
    const data = [
        {id: 1, language: 'Linguagem 1', percentage: 30}
    ]

    const data = await connection.execute('select * from programming_laguages')

    return response.json(data)
})

app.post()

router.get("/", async (request, response) => {

    // await User.create({name: "Hérika", lastname: "Felipe"});
    const users = await User.findByPk(2)

    return response.json(users)
})

app.use(router)

app.listen(4000, async () => {
    console.log('Servidor funcionando!')
})
