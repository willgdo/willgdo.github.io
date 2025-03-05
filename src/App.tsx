import { useState } from "react";
import Header from "./components/Header.tsx";
import About from "./components/About.tsx";

function App() {
  const [isReduced, setIsReduced] = useState(false);

  function handleClick() {
    setIsReduced(true);
  }

  return (
    <>
      <div className="container">
        <Header isReduced={isReduced} onClick={handleClick} />
        <About isReduced={isReduced} />
      </div>
    </>
  );
}

export default App;
