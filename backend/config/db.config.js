const env = require("./env")
const Sequelize = require("sequelize")
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.Client = require("../models/client.model.js")(sequelize, Sequelize)

module.exports = db