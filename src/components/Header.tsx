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
            Software developer with 9+ years of experience, I am passionate
            about technology and a person dedicated to learning! I'm always
            committed to expanding my knowledge, solving problems and
            contributing to people and companies, ensuring projects meet
            business goals and drive long-term value.
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
