import { experience } from "../utils/utils";

interface ExperienceProps {
  title: string;
}

function Experience({ title }: ExperienceProps) {
  return (
    <>
      <h3>{title}</h3>

      {experience.map((item) => {
        return (
          <div className="exp">
            <div>
              <img src={item.urlLogo} alt={`logo ${item.name}`} />
            </div>

            <div>
              <strong>{`${item.name} - ${item.role}`}</strong>
              <br />
              <span>{`${item.period} | ${item.location} | ${item.type}`}</span>
              <br />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Experience;
