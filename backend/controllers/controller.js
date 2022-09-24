const db = require("./../config/db.config")
const Cliente = db.Cliente

exports.create = (request, response) => {
    let cliente = {}

    try {
        cliente.nome = request.body.nome
        cliente.email = request.body.email
        cliente.idade = request.body.idade

        Cliente.create(cliente, {
            attribute: ["id", "nome", "email", "idade"]
        }).then(cliente => {
            response.status(200).json(cliente)
        })
    } catch (error) {
        response.status(500).json({
            message: "Error Creating!",
            error: error.message
        })
    }
}

exports.getCliente = (request, response) => {
    Cliente.findByPk(request.params.id, {
        attribute: ["id", "nome", "email", "idade"]
    }).then(cliente => {
        response.status(200).json(cliente)
    }).catch(error => {
        console.log("Erro ao retornar cliente: " + error)
        response.status(500).json({
            message: "Error When Getting!",
            error: error
        })
    })
}

// TODO getClientes
exports.getClientes = (request, response) => {
    try{
		Cliente.findAll({
            attributes: ['id', 'nome', 'idade', 'email']
        }).then(clientes => {
		    response.status(200).json(clientes)
		})
	}catch(error) {
		response.status(500).json({
		    message: "Error Returning All Clients!",
		    error: error
		});
	}
}

exports.delete = async (request, response) => {
    try {
        let clientId = request.params.id
        let cliente = await Cliente.findByPk(clientId)

        if (cliente) {
            await cliente.destroy();
            response.status(200).json("Successful Deleting!")
        } else {
            response.status(404).json({
                message: "Error Deleting, Id Does Not Exist!",
                error: error
            })
        }
    } catch (error) {
        response.status(500).json({
            message: "Could Not Delete Client " + request.params.id + "!",
            error: error
        })
    }
}

exports.update = async (request, response) => {
    try {
        let clientId = request.params.id
        let cliente = await Cliente.findByPk(clientId)
        console.log(cliente)

        if (cliente) {
            let updateObject = {
                nome: request.body.nome,
                email: request.body.email,
                idade: request.body.idade
            }

            let result = await Cliente.update(updateObject, {
                returning: true,
                where: {id: clientId},
                attributes: ["id", "nome", "email", "idade"]
            })

            console.log(result) 
            // se deu errado [0]
            // se deu certo [undefined, 1]

            if (result[1]) {
                response.status(200).json({
                    message: "Success When Updating",
                    result: result
                })
            } else {
                response.status(500).json({
                    message: "The Client" + clientId + "Could Be Updated",
                    error: "The Client" + clientId + "Could Be Updated"
                })
            }
        } else {
            response.status(404).json({
                message: "Could Not Find The Cliente" + clientId,
                error: "Could Not Find The Cliente" + clientId
            })
        }
    } catch (error) {
        response.status(500).json({
            message: "Error Updating Client" + request.params.id,
            error: error
        })
    }
}