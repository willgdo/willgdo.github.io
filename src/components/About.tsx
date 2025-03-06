interface AboutProps {
  isReduced: boolean;
}

function About({ isReduced }: AboutProps) {
  return (
    <>
      <section className={`about ${isReduced ? "a-expanded" : ""}`}>
        <div className={`content ${isReduced ? "" : "hidden"}`}>
          <div className="nav-wrapper">
            <nav>
              <ul>
                <li>Sobre</li>
                <li>Formação</li>
                <li>Experiência</li>
                <li>Contato</li>
              </ul>
            </nav>
          </div>
          <div>Conteúdo</div>
          <div>Footer</div>
        </div>
      </section>
    </>
  );
}

export default About;
