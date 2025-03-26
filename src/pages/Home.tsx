import { useState } from "react";
import Header from "../components/Header.tsx";
import Perfil from "../components/Perfil.tsx";

export function Home() {
  const [isReduced, setIsReduced] = useState(false);

  function handleClick() {
    setIsReduced(true);
  }

  function handleClickMobile() {
    setIsReduced(false);
  }

  return (
    <div className="container">
      <Header
        isReduced={isReduced}
        onClickDesktop={handleClick}
        onClickMobile={handleClickMobile}
      />
      <Perfil isReduced={isReduced} />
    </div>
  );
}
