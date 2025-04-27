import { useState } from "react";
import Header from "../components/Header.tsx";
import Perfil from "../components/Perfil.tsx";
import About from "../components/About.tsx";
import Education from "../components/Education.js";
import Experience from "../components/Experience.js";
import Contact from "../components/Contact.js";
import { topics } from "../utils/utils.js";

export function Home() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [section, setSection] = useState("Início");

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function showSection(section: string) {
    setSection(section);
    setIsMenuOpen(!isMenuOpen);
  }

  function minimizeHome() {
    setIsMinimized(true);
  }

  return (
    <div className="container">
      {section === "Início" && (
        <>
          <Header isMinimized={isMinimized} />
          <Perfil isMinimized={isMinimized} />
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
        onClick={minimizeHome}
        className={isMinimized ? "hidden" : "chevron-right"}
        src="./icons/chevron-double.png"
      />

      {/* Botão para abrir menu com informações (mobile) */}
      <div className="menu-icon" onClick={openMenu}>
        ☰
      </div>

      {/* Menu com informações (mobile) */}
      <nav
        id="mobileMenu"
        className={isMenuOpen ? "mobile-menu open-menu" : "mobile-menu"}
      >
        <ul>
          <li onClick={() => showSection("Início")}>Início</li>
          {topics.map((topic) => {
            return (
              <li key={topic} onClick={() => showSection(topic)}>
                {topic}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
