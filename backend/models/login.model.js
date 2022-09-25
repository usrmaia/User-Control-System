module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("login", {
        id: {
            type: Sequelize.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        birthdate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        }
    })

    return Account
}