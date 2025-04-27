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
  const [sectionTitle, setSectionTitle] = useState("Início");

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showSection = (sectionTitle: string) => {
    setSectionTitle(sectionTitle);
    setIsMenuOpen(!isMenuOpen);
  };

  const minimizeHome = () => {
    setIsMinimized(true);
  };

  return (
    <div className="container">
      {sectionTitle === "Início" && (
        <>
          <Header isMinimized={isMinimized} />
          <Perfil isMinimized={isMinimized} />
        </>
      )}

      {sectionTitle === "Sobre" && (
        <section className="section">
          <About title={sectionTitle} />
        </section>
      )}

      {sectionTitle === "Formação" && (
        <section className="section">
          <Education title={sectionTitle} />
        </section>
      )}

      {sectionTitle === "Experiência" && (
        <section className="section">
          <Experience title={sectionTitle} />
        </section>
      )}

      {sectionTitle === "Contato" && (
        <section className="section">
          <Contact title={sectionTitle} />
        </section>
      )}

      {/* Botão para minimizar home e mostrar menus das seções (web)) */}
      <img
        id="btn-chevron"
        onClick={minimizeHome}
        className={isMinimized ? "hidden" : ""}
        src="./icons/chevron-double.png"
      />

      {/* Botão para abrir menu das seções (mobile) */}
      <div className="menu-mobile-icon" onClick={openMenu}>
        ☰
      </div>

      {/* Menu (mobile) */}
      <nav className={isMenuOpen ? "menu-mobile menu-open" : "menu-mobile"}>
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
