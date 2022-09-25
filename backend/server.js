const express = require("express")
const app = express()
var bodyParser = require("body-parser")

global.__basedir = __dirname

const db = require("./config/db.config")
const Account = db.Account
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
    Account.sync().then(() => {
        const account = [
            {username: "Pedro", email: "pedro@gmail.com", birthdate: "1999-05-30"},
            {username: "Sara", email: "sara@gmail.com", birthdate: "1995-01-23"},
            {username: "Emilly", email: "emilly@gmail.com", birthdate: "1990-09-12"},
            {username: "Ricardo", email: "ricardo@gmail.com", birthdate: "1988-07-18"},
            {username: "Daniel", email: "daniel@gmail.com", birthdate: "2001-01-06"}
        ]

        account.forEach((item) => {
            Account.create(item)
        });
    })
})