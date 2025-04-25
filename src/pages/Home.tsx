import { useState } from "react";
import Header from "../components/Header.tsx";
import Perfil from "../components/Perfil.tsx";
import { topics } from "../utils/utils.js";
import About from "../components/About.tsx";

export function Home() {
  const [isReduced, setIsReduced] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showWeb, setShowWeb] = useState(true);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  function toggleShow() {
    setShowWeb(!showWeb);
    setOpenMenu(!openMenu);
  }

  function handleClick() {
    setIsReduced(true);
  }

  return (
    <div className="container">
      {showWeb ? (
        <>
          <Header isReduced={isReduced} />
          <Perfil isReduced={isReduced} />
        </>
      ) : (
        <div className="showWeb">
          <About title="Sobre" />
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
          {topics.map((topic) => {
            return (
              <li key={topic} onClick={toggleShow}>
                {topic}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
