import { Link } from 'react-router-dom'
import img from "./../../img/Server-pana.png"
import styles from "./styles.css"

function Home() {
  return (
    <>
      <section id='home'>
        <div>
          <h1>User Control System</h1>
          <p>A solution to control the login of users of an application, all this in an easy and intuitive way!</p>
          <Link to={"../client/view"}>Show More!</Link>
        </div>
        <img src={img} alt="Imagem ilustrativa"/>
      </section>
    </>
  )
}

export default Home