import { useState } from "react";

function Header() {
  const [isReduced, setIsReduced] = useState(false);

  function handleClick() {
    setIsReduced(true);
  }

  return (
    <>
      <header className={isReduced ? "header h-reduced" : "header"}>
        <button id="btn" onClick={handleClick}>
          Ok
        </button>
      </header>
    </>
  );
}

export default Header;
