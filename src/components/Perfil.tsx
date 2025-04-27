import { useState } from "react";
import { topics } from "../utils/utils.js";
import About from "./About.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import Contact from "./Contact.js";
import DowloadButton from "./DowloadButton.js";

interface PerfilProps {
  isMinimized: boolean;
}

function Perfil({ isMinimized }: PerfilProps) {
  const [title, setTitle] = useState("Sobre");

  function handleContent(newTitle: string) {
    setTitle(newTitle);
  }

  return (
    <>
      <section className={`information ${isMinimized ? "i-expanded" : ""}`}>
        <div className={`information-content ${isMinimized ? "" : "hidden"}`}>
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
          <div className="section-content">
            {title === "Sobre" && <About title={title} />}

            {title === "Formação" && <Education title={title} />}

            {title === "Experiência" && <Experience title={title} />}

            {title === "Contato" && <Contact title={title} />}
          </div>

          <footer className="footer">By Will</footer>
        </div>
      </section>
      <DowloadButton isMinimized={isMinimized} />
    </>
  );
}

export default Perfil;
