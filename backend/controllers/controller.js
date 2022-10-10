const db = require("./../config/db.config")
const Client = db.Client

exports.create = (request, response) => {
    let client = {}

    try {
        client.name = request.body.name
        client.email = request.body.email
        client.birthdate = request.body.birthdate

        Client.create(client, {
            attribute: ["id", "name", "email", "birthdate"]
        }).then(client => {
            response.status(200).json({
                message: "Success Creating Client!",
                client: client
            })
        }).catch(error => {Client
            response.status(400).json({
                message: "Error Creating Client!",
                client: client,
                error: error.message
            })
        })
    } catch (error) {
        response.status(500).json({
            message: "Error Creating Client!",
            client: client,
            error: error.message
        })
    }
}

exports.getClient = (request, response) => {
    let clientId = request.params.id

    Client.findByPk(clientId, {
        attribute: ["id", "name", "email", "birthdate"]
    }).then(client => {
        response.status(200).json({
            message: "Success in Getting Client!",
            client: client
        })
    }).catch(error => {
        response.status(500).json({
            message: "Error When Getting Client!",
            id: clientId,
            error: error
        })
    })
}

exports.getClients = (request, response) => {
    Client.findAll({
        attributes: ["id", "name", "email", "birthdate"]
    }).then(clients => {
        response.status(200).json({
            message: "Success in Getting All Clients!",
            clients: clients
        })
    }).catch(error => {
        response.status(500).json({
            message: "Error When Getting All Clients!",
            error: error
        })
	})
}

exports.delete = async (request, response) => {
    let clientId = request.params.id

    try {
        let client = await Client.findByPk(clientId)

        if (client) {
            await client.destroy();
            response.status(200).json({
                message: "Successful Deleting!",
                client_deleted: client
            })
        } else {
            response.status(404).json({
                message: "Error Deleting, Id Does Not Exist!",
                error: error
            })
        }
    } catch (error) {
        response.status(500).json({
            message: `Could Not Delete Client ${clientId}!`,
            error: error
        })
    }
}

exports.update = async (request, response) => {
    let clientId = request.params.id

    try {
        let client = await Client.findByPk(clientId)

        if (client) {
            let updatedObject = {
                name: request.body.name,
                email: request.body.email,
                birthdate: request.body.birthdate 
                // ALERT - birthdate deve ser string
            }

            let result = await Client.update(updatedObject, {
                returning: true,
                where: {id: clientId},
                attributes: ["id", "name", "email", "birthdate"]
            })

            if (result[1]) {
                response.status(200).json({
                    message: "Success When Updating",
                    result: result,
                })
            } else {
                response.status(500).json({
                    message:`The Account ${clientId} Could Be Updated`,
                    error: `The Account ${clientId} Could Be Updated`
                })
            }
        } else {
            response.status(404).json({
                message: `Error Updating Client`,
                error: `Could Not Find The Client ${clientId}`
            })
        }
    } catch (error) {
        response.status(500).json({
            message: `Error Updating Client ${clientId}`,
            error: error
        })
    }
}