let express = require("express")
let router = express.Router()
const Client = require("./../controllers/controller")

router.post("/api/client", Client.create)
router.get("/api/client/:id", Client.getClient)
router.get("/api/clients", Client.getClients)
router.put("/api/client/:id", Client.update)
router.delete("/api/client/:id", Client.delete)

module.exports = router