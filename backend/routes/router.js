let express = require("express")
let router = express.Router()
const cliente = require("./../controllers/controller")

router.post("/api/cliente", cliente.create)
router.get("/api/cliente/:id", cliente.getCliente)
router.get("/api/cliente", cliente.getClientes)
router.put("/api/cliente/:id", cliente.update)
router.delete("/api/cliente/:id", cliente.delete)

module.exports = router