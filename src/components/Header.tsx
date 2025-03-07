interface HeaderProps {
  isReduced: boolean;
  onClick: () => void;
}

function Header({ isReduced, onClick }: HeaderProps) {
  return (
    <>
      <header className={isReduced ? "header h-reduced" : "header"}>
        <div className={isReduced ? "perfil p-expanded" : "perfil"}>
          <img src="./photo.jpg" alt="Imagem de Willian Oliveira" />
          <h2>
            <strong>Willian Oliveira</strong>
          </h2>
          <h1>Software Developer</h1>
          <p>
            Desenvolvedor de software com 9+ anos de experiência, sou apaixonado
            por tecnologia e uma pessoa dedicada ao aprendizado! Estou sempre
            comprometido em expandir meu conhecimento, resolver problemas e
            contribuir para pessoas e empresas, garantindo que os projetos
            atendam às metas de negócios e gerem valor a longo prazo.
          </p>
          <div className="tags">
            <ul>
              <li>
                <img
                  alt="HTML Icon"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                />
              </li>
              <li>
                <img
                  alt="CSS Icon"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                />
              </li>
              <li>
                <img
                  alt="JS Icon"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                />
              </li>
              <li>
                <img
                  alt="TS Icon"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
                />
              </li>
              <li>
                <img
                  alt="React Icon"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                />
              </li>
              <li>
                <img
                  alt="React Icon"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
                />
              </li>
              <li>
                <img
                  alt="Node Icon"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                />
              </li>
              <li>
                <img
                  alt="Node Icon"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                />
              </li>
            </ul>
          </div>
        </div>
        <img
          id="btn"
          onClick={onClick}
          className={isReduced ? "hidden" : "chevron-right"}
          src="./chevron-double.png"
        />
      </header>
    </>
  );
}

export default Header;
