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
            return (
              <li key={item.name}>
                <a href={item.url} target="_blank">
                  <img
                    src={`./icons/${item.name}.png`}
                    alt={`${item.name} ícone`}
                  />
                  <div>{item.url}</div>
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
