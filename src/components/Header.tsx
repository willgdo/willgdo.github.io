import { stacks } from "../utils/utils";

interface HeaderProps {
  isMinimized: boolean;
}

function Header({ isMinimized }: HeaderProps) {
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
          Gosto de resolver problemas, criar soluções simples para desafios
          complexos e deixar cada projeto um pouco melhor do que encontrei.
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

export default Header;
