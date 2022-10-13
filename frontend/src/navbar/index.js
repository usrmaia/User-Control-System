import { Link } from 'react-router-dom'
import "./styles.css"

function NavBar() {
  return (
    <>
      <header>
        <div id="logo">
          <img src="https://img.icons8.com/clouds/100/000000/form.png" />
          <h1>Client Base</h1>
        </div>
        <nav>
          <li><Link to={"home"} className="link">Home</Link></li>
          <li><Link to={"client/view"} className="link">View</Link></li>
          <li><Link to={"client/"} className="link">Add</Link></li>
          <li><Link to={"about"} className="link">About</Link></li>
        </nav>
      </header>
    </>
  )
}

export default NavBar