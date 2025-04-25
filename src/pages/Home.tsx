import { useState } from "react";
import Header from "../components/Header.tsx";
import Perfil from "../components/Perfil.tsx";
import { topics } from "../utils/utils.js";

export function Home() {
  const [isReduced, setIsReduced] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  function handleClick() {
    setIsReduced(true);
  }

  return (
    <div className="container">
      <Header isReduced={isReduced} />
      <Perfil isReduced={isReduced} />

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
              <li key={topic}>
                <a href="#">{topic}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
