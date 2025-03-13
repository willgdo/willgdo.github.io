import { useState } from "react";

interface AboutProps {
  isReduced: boolean;
}

function About({ isReduced }: AboutProps) {
  const [title, setTitle] = useState("Sobre");
  // const [content, setContent] = useState("teste");

  function handleContent(newTitle: string) {
    setTitle(newTitle);
  }

  return (
    <>
      <section className={`about ${isReduced ? "a-expanded" : ""}`}>
        <div className={`content ${isReduced ? "" : "hidden"}`}>
          <div className="nav-wrapper">
            <nav>
              <ul>
                <li
                  className={`${title === "Sobre" ? "bg-red" : ""}`}
                  onClick={() => handleContent("Sobre")}
                >
                  Sobre
                </li>
                <li
                  className={`${title === "Formação" ? "bg-red" : ""}`}
                  onClick={() => handleContent("Formação")}
                >
                  Formação
                </li>
                <li
                  className={`${title === "Experiência" ? "bg-red" : ""}`}
                  onClick={() => handleContent("Experiência")}
                >
                  Experiência
                </li>
                <li
                  className={`${title === "Contato" ? "bg-red" : ""}`}
                  onClick={() => handleContent("Contato")}
                >
                  Contato
                </li>
              </ul>
            </nav>
          </div>
          <div className="content-info">
            {title === "Sobre" && (
              <>
                <h3>{title}</h3>
                <p>
                  Hello, my friend!
                  <br />
                  Eu sou Willian (mas pode me chamar de Will). Tenho 29 anos,
                  moro em São Paulo, sou casado e pai de um mini adolescente de
                  3 anos! Além da tecnologia, outra grande paixão que tenho é a
                  aviação! Em 2019, realizei meu grande sonho e tirei minha
                  licença de piloto privado.
                  <br />
                  <br />
                  Desde sempre fui fascinado por tecnologia e sabia que essa era
                  a área que queria seguir. Hoje, com quase uma década de
                  experiência como desenvolvedor, tenho certeza de que fiz a
                  melhor escolha! Ao longo da minha trajetória, atuei
                  principalmente como desenvolvedor front-end e também com
                  automação de processos utilizando BPMN (Camunda).
                  <br />
                  Tive a oportunidade de participar de diversos projetos para
                  grandes empresas, como: Santander, Natura, Boticário,
                  Whirlpool, GPA, entre outros. Isso me trouxe experiência
                  valiosa em ambientes de alta demanda e complexidade.
                  <br />
                  <br />
                  Sou uma pessoa curiosa, que adora aprender e experimentar
                  novas tecnologias. Também me considero altamente adaptável a
                  diferentes projetos e equipes.
                  <br />
                  <br />
                  Se quiser saber algo mais, fique à vontade para entrar em
                  contato!
                </p>
              </>
            )}

            {title === "Formação" && (
              <>
                <h3>{title}</h3>
                <p>
                  <strong>PUC Minas</strong>
                  <br />
                  Pós-graduação em Inteligência artificial e aprendizado de
                  máquina
                </p>
                <p>
                  <strong>FATEC Ipiranga - Faculdade de tecnologia</strong>
                  <br />
                  Graduação em Análise e desenvolvimento de Sistemas
                </p>
                <p>
                  <strong>SLEC - Southern Lakes English College</strong>
                  <br />
                  Programa de intercâmbio realizado em Queenstown - Nova
                  Zelândia (Inglês)
                </p>
                <p>
                  <strong className="silver">Udemy</strong>
                  <br />
                  JavaScript: Algoritmos + Estruturas de Dados
                </p>
                <p>
                  <strong className="silver">Caelum</strong>
                  <br />
                  Desenvolvimento Web com HTML, CSS e JavaScript
                  <br />
                  Web Apps Responsivas com Javascript e jQuery
                </p>
              </>
            )}

            {title === "Experiência" && (
              <>
                <h3>{title}</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Corporis consectetur dolore reiciendis consequatur mollitia,
                  iure, molestias soluta quia rem architecto fugit, temporibus
                  vitae atque natus quas totam doloribus unde! Quaerat. Lorem
                  ipsum dolor, sit amet consectetur adipisicing elit. Harum
                  quasi totam repellat maiores beatae modi molestias iusto
                  voluptatem ducimus illum tempore reprehenderit odio quos,
                  eligendi architecto! Commodi cupiditate ipsam impedit!
                </p>
              </>
            )}

            {title === "Contato" && (
              <>
                <h3>{title}</h3>
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://wa.me/+5511965526415" target="_blank">
                        <img
                          src="./whatsapp.png"
                          alt="whatsapp ícone"
                          width="35px"
                          height="35px"
                        />
                        https://wa.me/+5511965526415
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.linkedin.com/in/willoliveira737/"
                        target="_blank"
                      >
                        <img
                          src="./linkedin.png"
                          alt="linkedin ícone"
                          width="35px"
                          height="35px"
                        />
                        https://www.linkedin.com/in/willoliveira737/
                      </a>
                    </li>

                    <li>
                      <a href="https://github.com/willgdo" target="_blank">
                        <img
                          src="./github.png"
                          alt="github ícone"
                          width="35px"
                          height="35px"
                        />
                        https://github.com/willgdo
                      </a>
                    </li>

                    <li>
                      <a
                        href="http://instagram.com/_will0liveira/"
                        target="_blank"
                      >
                        <img
                          src="./instagram.png"
                          alt="instagram ícone"
                          width="35px"
                          height="35px"
                        />
                        http://instagram.com/_will0liveira/
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
          <footer className="footer">By Will</footer>
        </div>
      </section>
      <a className="btn-download-cv" href="#" download>
        <img src="./download.png" alt="download CV" title="download CV" />
      </a>
    </>
  );
}

export default About;
