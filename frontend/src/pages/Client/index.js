import { Outlet } from "react-router-dom"
import "./styles.css"

function Client() {
  return (
    <>
      <section id="client">
        <Outlet />
      </section>
    </>
  )
}

export default Client