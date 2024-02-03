import express, { request, response } from "express"
import sequelize from "./src/database/sequelize.js"
import User from "./src/models/user.js"

const app = express()
const router = express.Router()

router.get("/", async (request, response) => {

    // await User.create({name: "Hérika", lastname: "Felipe"});
    const users = await User.findByPk(2)

    return response.json(users)
})

app.use(router)

app.listen(4000, async () => {
    console.log('Servidor funcionando!')
})
