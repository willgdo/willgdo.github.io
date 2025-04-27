import { stacks } from "../utils/utils";

interface HeaderProps {
  isMinimized: boolean;
}

function Header({ isMinimized }: HeaderProps) {
  return (
    <>
      <header className={isMinimized ? "header h-reduced" : "header"}>
        <div className={isMinimized ? "perfil p-expanded" : "perfil"}>
          <img src="./assets/photo.jpg" alt="Imagem de Willian Oliveira" />
          <h2>
            <strong>Willian Oliveira</strong>
          </h2>
          <h1>Software Developer</h1>
          <p>
            Desenvolvedor de software com 9+ anos de experiência, apaixonado por
            tecnologia e sempre em busca de aprender algo novo. Tenho por
            objetivo resolver problemas, ajudar negócios a crescer e criar
            soluções que realmente façam sentido e deixem um impacto positivo.
          </p>
          <div className="tags">
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
    </>
  );
}

export default Header;
