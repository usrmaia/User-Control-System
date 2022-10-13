import "./styles.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getClients, deleteClient } from "../../services/client-requests"
import { FaTrash, FaEdit } from 'react-icons/fa'

function ViewClients() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    loadClients()
  }, [])

  const loadClients = async () => {
    let clientsResponse = await getClients()
    clientsResponse = await clientsResponse.data.clients
    setClients(clientsResponse)
    console.log(clientsResponse)
  }

  const saveClient = async (id) => {
    await deleteClient(id)
    //window.location.reload()
    loadClients()
  }

  return (
    <>
      <section id="view">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Birth Date</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client.id}>
                <td data-label="Id">{client.id}</td>
                <td data-label="Name">{client.name}</td>
                <td data-label="Email">{client.email}</td>
                <td data-label="Birth Data" >{client.birthdate}</td>
                <td>
                  <Link to={`../edit/${encodeURIComponent(client.id)}`}>
                    <button><FaEdit /></button>
                  </Link>
                  <button onClick={() => saveClient(client.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default ViewClients