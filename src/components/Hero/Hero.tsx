import { stacks } from "../../utils/utils";

interface HeroProps {
  isExpanded: boolean;
}

export default function Hero({ isExpanded }: HeroProps) {
  return (
    <header
      className={`hero-panel ${isExpanded ? "hero-panel--contracted" : ""}`}
    >
      <div className="hero-content">
        <img
          src="./assets/photo.jpg"
          alt="Foto de perfil de Willian Oliveira"
          className="hero-avatar"
        />
        <h2 className="hero-subtitle">Willian Oliveira</h2>
        <h1 className="hero-title">Software Developer</h1>

        <p className="hero-description">
          Desenvolvedor de software com quase uma década de experiência.
          Especializado em arquiteturas de UI escaláveis, microfrontends e
          performance web, transformando problemas complexos em interfaces
          fluidas e limpas.
        </p>

        <div className="tech-stack-list">
          <ul>
            {stacks.map((stack) => {
              const iconUrl =
                stack === "jest"
                  ? `https://raw.githubusercontent.com/devicons/devicon/master/icons/${stack}/${stack}-plain.svg`
                  : `https://raw.githubusercontent.com/devicons/devicon/master/icons/${stack}/${stack}-original.svg`;

              return (
                <li key={stack}>
                  <img
                    src={iconUrl}
                    alt={`Ícone da tecnologia ${stack}`}
                    title={stack}
                    loading="lazy"
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
