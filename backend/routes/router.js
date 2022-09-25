let express = require("express")
let router = express.Router()
const Account = require("./../controllers/controller")

router.post("/api/account", Account.create)
router.get("/api/account/:id", Account.getAccount)
router.get("/api/account", Account.getAccounts)
router.put("/api/account/:id", Account.update)
router.delete("/api/account/:id", Account.delete)

module.exports = router