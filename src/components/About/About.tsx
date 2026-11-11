import "./About.css";

interface AboutProps {
  title?: string;
}

interface SkillCategory {
  category: string;
  items: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Microfrontends",
      "Design Systems",
      "Web Performance",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python"],
  },
  {
    category: "Testing & Observability",
    items: ["Jest", "Playwright", "DataDog", "Dynatrace", "Grafana"],
  },
  {
    category: "DevOps & Tooling",
    items: ["Git", "Vite", "CI/CD Pipelines"],
  },
];

export default function About({ title = "Sobre" }: AboutProps) {
  return (
    <article className="about-section">
      <header className="section-header">
        <h3 className="section-title">{title}</h3>
        <span className="section-greeting">Hello, my friend! 👋</span>
      </header>

      <div className="about-bio">
        <p>
          Eu sou <strong>Willian</strong> (mas pode me chamar de{" "}
          <strong>Will</strong>). Tenho 31 anos, moro em São Paulo, sou casado e
          pai de um mini adolescente de 4 anos! Além da tecnologia, outra grande
          paixão que tenho é a aviação! Em 2022, realizei meu grande sonho e
          tirei minha licença de piloto.
        </p>

        <p>
          Desde sempre fui fascinado por tecnologia e sabia que essa era a área
          que queria seguir. Hoje, com quase uma década de experiência como
          desenvolvedor, tenho certeza de que fiz a melhor escolha! Ao longo da
          minha trajetória, venho atuando principalmente como desenvolvedor
          front-end, com foco em ReactJS, TypeScript, Microfrontends e
          Arquitetura de UI, sempre explorando novas soluções e aberto a novos
          desafios!
        </p>

        <p>
          Sou uma pessoa curiosa, que adora aprender e experimentar novas
          tecnologias. Também me considero altamente adaptável a diferentes
          projetos e equipes.
        </p>
      </div>

      <div className="skills-container">
        <h4 className="skills-heading">Tecnologias & Ferramentas</h4>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map(({ category, items }) => (
            <div key={category} className="skill-card">
              <span className="skill-card-title">{category}</span>
              <ul className="skill-pill-list">
                {items.map((item) => (
                  <li key={item} className="skill-pill">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <footer className="about-cta">
        <p>
          Se quiser saber algo mais, conversar sobre arquitetura web ou novos
          desafiosfique à vontade para entrar em contato!
        </p>
      </footer>
    </article>
  );
}
