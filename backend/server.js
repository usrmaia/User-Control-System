const express = require("express")
const app = express()
var bodyParser = require("body-parser")

global.__basedir = __dirname

const db = require("./config/db.config")
const Cliente = db.Cliente
let router = require("./routes/router")

const cors = require("cors")
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSucessStatus: 200
}
app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(express.static("resources"))
app.use("/", router)

const server = app.listen(8080, () => {
    let host = server.address().address
    let port = server.address().port

    console.log(`APP Running htpp://${host}:${port}`)
})

db.sequelize.sync({
    force: true
}).then(() => {
    console.log("Rewriting And Populate The Table")
    Cliente.sync().then(() => {
        const cliente = [
            {nome: "Pedro", email: "pedro@gmail.com", idade: 23},
            {nome: "Sara", email: "sara@gmail.com", idade: 20},
            {nome: "Emilly", email: "emilly@gmail.com", idade: 19},
            {nome: "Ricardo", email: "ricardo@gmail.com", idade: 27},
            {nome: "Daniel", email: "daniel@gmail.com", idade: 28}
        ]

        cliente.forEach((item) => {
            Cliente.create(item)
        });
    })
})