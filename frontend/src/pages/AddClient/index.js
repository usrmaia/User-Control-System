import "./styles.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addClient } from './../../services/client-requests'
import img from "./../../img/Forms-bro.png"

function AddClient() {
  const navigate = useNavigate()

  const [client, setClient] = useState({
    name: '',
    email: '',
    birthdate: ''
  })

  const handleChange = event => {
    const { name, value } = event.target

    setClient(previousClient => {
      return {
        ...previousClient,
        [name]: value
      }
    })
  }

  const saveClient = async event => {
    event.preventDefault()
    console.log(client)
    await addClient(client)
    navigate('/client/view')
  }

  return (
    <>
      <section id="add">
        <form name="Form" onSubmit={saveClient}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name='name'
              value={client.name}
              onChange={handleChange}
              placeholder="Enter your name..." />
          </div>

          <div>
            <label>Email: </label>
            <input
              type="email"
              name='email'
              value={client.email}
              onChange={handleChange}
              placeholder="Enter your email..." />
          </div>

          <div>
            <label>Birth Date: </label>
            <input
              type="Date"
              name='birthdate'
              value={client.birthdate}
              onChange={handleChange} />
          </div>
          <button type='submit'>Add</button>
        </form>
        <img src={img} />
      </section>
    </>
  )
}

export default AddClient 