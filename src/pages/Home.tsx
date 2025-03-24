import { useState } from "react";
import Header from "../components/Header.tsx";
import Perfil from "../pages/Perfil.tsx";

export function Home() {
  const [isReduced, setIsReduced] = useState(false);

  function handleClick() {
    setIsReduced(true);
  }

  return (
    <div className="container">
      <Header isReduced={isReduced} onClick={handleClick} />
      <Perfil isReduced={isReduced} />
    </div>
  );
}
