import { useState } from "react";
import { topics } from "../utils/utils.js";
import About from "../components/About.js";
import Education from "../components/Education.js";
import Experience from "../components/Experience.js";
import Contact from "../components/Contact.js";
import DowloadButton from "../components/DowloadButton.js";

interface PerfilProps {
  isReduced: boolean;
}

function Perfil({ isReduced }: PerfilProps) {
  const [title, setTitle] = useState("Sobre");

  function handleContent(newTitle: string) {
    setTitle(newTitle);
  }

  return (
    <>
      <section className={`about ${isReduced ? "a-expanded" : ""}`}>
        <div className={`content ${isReduced ? "" : "hidden"}`}>
          <div className="nav-wrapper">
            <nav>
              <ul>
                {topics.map((topic) => {
                  return (
                    <li
                      key={topic}
                      className={`${title === topic ? "bg-red" : ""}`}
                      onClick={() => handleContent(topic)}
                    >
                      {topic}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="content-info">
            {title === "Sobre" && <About title={title} />}

            {title === "Formação" && <Education title={title} />}

            {title === "Experiência" && <Experience title={title} />}

            {title === "Contato" && <Contact title={title} />}
          </div>

          <footer className="footer">By Will</footer>
        </div>
      </section>
      <DowloadButton isReduced={isReduced} />
    </>
  );
}

export default Perfil;
