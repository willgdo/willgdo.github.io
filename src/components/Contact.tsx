interface ContactProps {
  title: string;
}

function Contact({ title }: ContactProps) {
  return (
    <>
      <h3>{title}</h3>
      <div className="social">
        <ul>
          <li>
            <a href="https://wa.me/+5511965526415" target="_blank">
              <img
                src="./icons/whatsapp.png"
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
                src="./icons/linkedin.png"
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
                src="./icons/github.png"
                alt="github ícone"
                width="35px"
                height="35px"
              />
              https://github.com/willgdo
            </a>
          </li>

          <li>
            <a href="http://instagram.com/_will0liveira/" target="_blank">
              <img
                src="./icons/instagram.png"
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
  );
}

export default Contact;
