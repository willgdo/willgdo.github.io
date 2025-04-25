import { useState } from "react";
import Header from "../components/Header.tsx";
import Perfil from "../components/Perfil.tsx";
import { topics } from "../utils/utils.js";
import About from "../components/About.tsx";
import Education from "../components/Education.js";
import Experience from "../components/Experience.js";
import Contact from "../components/Contact.js";
import DowloadButton from "../components/DowloadButton.js";

export function Home() {
  const [isReduced, setIsReduced] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [section, setSection] = useState("Início");

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  function toggleShow(section: string) {
    setSection(section);
    setOpenMenu(!openMenu);
  }

  function handleClick() {
    setIsReduced(true);
  }

  return (
    <div className="container">
      {section === "Início" && (
        <>
          <Header isReduced={isReduced} />
          <Perfil isReduced={isReduced} />
        </>
      )}

      {section === "Sobre" && (
        <div className="showWeb">
          <About title={section} />
        </div>
      )}

      {section === "Formação" && (
        <div className="showWeb">
          <Education title={section} />
        </div>
      )}

      {section === "Experiência" && (
        <div className="showWeb">
          <Experience title={section} />
        </div>
      )}

      {section === "Contato" && (
        <div className="showWeb">
          <Contact title={section} />
        </div>
      )}

      {/* Botão para abrir menu com informações (web) */}
      <img
        id="btn-open"
        onClick={handleClick}
        className={isReduced ? "hidden" : "chevron-right"}
        src="./icons/chevron-double.png"
      />

      {/* Botão para abrir menu com informações (mobile) */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Menu com informações (mobile) */}
      <nav
        id="mobileMenu"
        className={openMenu ? "mobile-menu open-menu" : "mobile-menu"}
      >
        <ul>
          <li onClick={() => toggleShow("Início")}>Início</li>
          {topics.map((topic) => {
            return (
              <li key={topic} onClick={() => toggleShow(topic)}>
                {topic}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
