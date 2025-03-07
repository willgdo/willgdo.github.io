import { useState } from "react";

interface AboutProps {
  isReduced: boolean;
}

function About({ isReduced }: AboutProps) {
  const [title, setTitle] = useState("Sobre");

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
                <li onClick={() => handleContent("Sobre")}>Sobre</li>
                <li onClick={() => handleContent("Formação")}>Formação</li>
                <li onClick={() => handleContent("Experiência")}>
                  Experiência
                </li>
                <li onClick={() => handleContent("Contato")}>Contato</li>
              </ul>
            </nav>
          </div>
          <div className="content-info">
            {title === "Sobre" && (
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

            {title === "Formação" && (
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
