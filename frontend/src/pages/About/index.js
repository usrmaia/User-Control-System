import "./styles.css"
import Footer from "../Footer"
import img from "./../../img/Profile Picture.jpg"

function About() {
  return (
    <>
      <section id="about">
        <div>
          <div>
            <p>This system is part of the final work of a course:
              <strong> Desenvolvimento de Interfaces WEB com JavaScript</strong>
              , provided by <strong>Universidade do Trabalho Digital - UTD.</strong></p>
            <p>Developer: <strong>George Maia</strong>.</p>
          </div>
          <img src={img} />
        </div>
        <Footer />
      </section>
    </>
  )
}

export default About