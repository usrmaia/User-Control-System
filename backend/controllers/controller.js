const db = require("./../config/db.config")
const Account = db.Account

exports.create = (request, response) => {
    let account = {}

    try {
        account.username = request.body.username
        account.email = request.body.email
        account.birthdate = request.body.birthdate

        Account.create(account, {
            attribute: ["id", "username", "email", "birthdate"]
        }).then(account => {
            response.status(200).json({
                message: "Success Creating Account!",
                account: account
            })
        }).catch(error => {
            response.status(400).json({
                message: "Error Creating Account!",
                account: account,
                error: error.message
            })
        })
    } catch (error) {
        response.status(500).json({
            message: "Error Creating Account!",
            account: account,
            error: error.message
        })
    }
}

exports.getAccount = (request, response) => {
    let accountId = request.params.id

    Account.findByPk(accountId, {
        attribute: ["id", "username", "email", "birthdate"]
    }).then(account => {
        response.status(200).json({
            message: "Success in Getting Account!",
            account: account
        })
    }).catch(error => {
        response.status(500).json({
            message: "Error When Getting Account!",
            id: accountId,
            error: error
        })
    })
}

exports.getAccounts = (request, response) => {
    Account.findAll({
        attributes: ["id", "username", "email", "birthdate"]
    }).then(account => {
        response.status(200).json({
            message: "Success in Getting All Accounts!",
            account: account
        })
    }).catch(error => {
        response.status(500).json({
            message: "Error When Getting All Accounts!",
            error: error
        })
	})
}

exports.delete = async (request, response) => {
    let accountId = request.params.id

    try {
        let account = await Account.findByPk(accountId)

        if (account) {
            await account.destroy();
            response.status(200).json({
                message: "Successful Deleting!",
                account_deleted: account
            })
        } else {
            response.status(404).json({
                message: "Error Deleting, Id Does Not Exist!",
                error: error
            })
        }
    } catch (error) {
        response.status(500).json({
            message: `Could Not Delete Account ${accountId}!`,
            error: error
        })
    }
}

exports.update = async (request, response) => {
    let accountId = request.params.id

    try {
        let account = await Account.findByPk(accountId)

        if (account) {
            let updatedObject = {
                username: request.body.username,
                email: request.body.email,
                birthdate: request.body.birthdate 
                // ALERT - birthdate deve ser string
            }

            let result = await Account.update(updatedObject, {
                returning: true,
                where: {id: accountId},
                attributes: ["id", "username", "email", "birthdate"]
            })

            if (result[1]) {
                response.status(200).json({
                    message: "Success When Updating",
                    result: result,
                })
            } else {
                response.status(500).json({
                    message:`The Account ${accountId} Could Be Updated`,
                    error: `The Account ${accountId} Could Be Updated`
                })
            }
        } else {
            response.status(404).json({
                message: `Error Updating account`,
                error: `Could Not Find The account ${accountId}`
            })
        }
    } catch (error) {
        response.status(500).json({
            message: `Error Updating Client ${accountId}`,
            error: error
        })
    }
}