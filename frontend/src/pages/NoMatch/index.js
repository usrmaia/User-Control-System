import "./styles.css"
import { Link } from 'react-router-dom'
import Home from '../Home'

function NoMatch() {
  return (
    <>
      <section id="nomatch">
        <h1>Erro 404</h1>
        <Link to="home" className="link">Come back home</Link>
      </section>
    </>
  )
}

export default NoMatch