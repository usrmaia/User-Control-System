import "./styles.css"
import img from "./../../img/Edit photo-amico.png"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editClient, getClient } from '../../services/client-requests'

function EditClient() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [client, setClient] = useState({
    id: id,
    name: '',
    email: '',
    birthdate: ''
  })

  useEffect(() => {
    searchClient(id)
  }, []);

  const searchClient = async id => {
    let clientData = await getClient(parseInt(id))
    clientData = await clientData.data.client
    console.log(clientData)
    setClient(clientData)
  }

  const handleChange = event => {
    const { name, value } = event.target

    setClient(previousClient => {
      return {
        ...previousClient,
        [name]: value
      }
    })
  }

  const saveClient = async (event) => {
    event.preventDefault()
    await editClient(client)
    navigate('/client/view')
  }

  return (
    <>
      <section id="edit">
        <form onSubmit={saveClient}>
          <div>
            <label>ID: </label>
            <input
              type="number"
              name='id'
              value={client.id}
              onChange={handleChange} readOnly
              placeholder="Enter new your name..." />
          </div>

          <div>
            <label>Name: </label>
            <input
              type="text"
              name='name'
              value={client.name}
              onChange={handleChange}
              placeholder="Enter new your email..." />
          </div>

          <div>
            <label>Email: </label>
            <input
              type="email"
              name='email'
              value={client.email}
              onChange={handleChange} />
          </div>

          <div>
            <label>Birth Date: </label>
            <input
              type="Date"
              name='birthdate'
              value={client.birthdate}
              onChange={handleChange} />
          </div>
          <button type='submit'>Edit</button>
        </form>
        <img src={img} />
      </section>
    </>
  )
}

export default EditClient