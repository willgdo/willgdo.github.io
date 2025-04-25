import { experience } from "../utils/utils";

interface ExperienceProps {
  title: string;
}

function Experience({ title }: ExperienceProps) {
  return (
    <>
      <h3>{title}</h3>

      {experience.map((item) => {
        const { name, urlLogo, role, period, location, type } = item;

        return (
          <div className="exp">
            <div>
              <img src={urlLogo} alt={`logo ${name}`} />
            </div>

            <div>
              <strong>{`${name} - ${role}`}</strong>
              <br />
              <span>{`${period} | ${location} | ${type}`}</span>
              <br />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Experience;
