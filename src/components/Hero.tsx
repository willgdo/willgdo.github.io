import { stacks } from "../utils/utils";

interface HeroProps {
  isMinimized: boolean;
}

function Hero({ isMinimized }: HeroProps) {
  return (
    <header className={isMinimized ? "header minimized" : "header"}>
      <div
        className={
          isMinimized ? "header-container expanded" : "header-container"
        }
      >
        <img src="./assets/photo.jpg" alt="Imagem de Willian Oliveira" />
        <h2>
          <strong>Willian Oliveira</strong>
        </h2>
        <h1>Software Developer</h1>
        <p>
          Desenvolvedor de software com 9+ anos de experiência. <br />
          Trabalhando para arquiteturas de UI escaláveis e descomplicando
          desafios complexos, unindo código limpo, alta performance e a melhor
          experiência de usuário
        </p>
        <div className="stacks">
          <ul>
            {stacks.map((stack) => {
              return (
                <li key={stack}>
                  <img
                    src={
                      stack === "jest"
                        ? `https://raw.githubusercontent.com/devicons/devicon/master/icons/${stack}/${stack}-plain.svg`
                        : `https://raw.githubusercontent.com/devicons/devicon/master/icons/${stack}/${stack}-original.svg`
                    }
                    alt={`${stack} Icon`}
                    title={stack}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Hero;
