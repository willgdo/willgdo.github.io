import { stacks } from "../utils/utils";

interface HeaderProps {
  isReduced: boolean;
}

function Header({ isReduced }: HeaderProps) {
  return (
    <>
      <header className={isReduced ? "header h-reduced" : "header"}>
        <div className={isReduced ? "perfil p-expanded" : "perfil"}>
          <img src="./assets/photo.jpg" alt="Imagem de Willian Oliveira" />
          <h2>
            <strong>Willian Oliveira</strong>
          </h2>
          <h1>Software Developer</h1>
          <p>
            Desenvolvedor de software com 9+ anos de experiência, apaixonado por
            tecnologia e aprendizado contínuo. Meu objetivo é resolver
            problemas, impulsionar negócios e criar soluções que gerem impacto
            real e duradouro, sempre buscando expandir meus conhecimentos.
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
