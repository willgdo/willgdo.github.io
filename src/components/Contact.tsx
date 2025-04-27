import { social } from "../utils/utils.tsx";

interface ContactProps {
  title: string;
}

function Contact({ title }: ContactProps) {
  return (
    <>
      <h3>{title}</h3>
      <div className="social">
        <ul>
          {social.map((item) => {
            const { name, url } = item;
            return (
              <li key={name}>
                <a href={url} target="_blank">
                  <img src={`./icons/${name}.png`} alt={`${name} ícone`} />
                  <div>{url}</div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Contact;
