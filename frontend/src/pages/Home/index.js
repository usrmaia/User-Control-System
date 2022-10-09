import { Components } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/edit">clique para adit</Link>
    </>
  )
}

export default Home