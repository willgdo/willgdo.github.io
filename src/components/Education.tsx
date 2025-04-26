import { education } from "../utils/utils";

interface EducationProps {
  title: string;
}

function Education({ title }: EducationProps) {
  return (
    <>
      <h3>{title}</h3>

      {education.map((item) => {
        const { school, course, main } = item;

        return (
          <>
            <p>
              <strong className={main ? "" : "silver"}>{school}</strong>
            </p>
            <p>
              {course[0]}
              <br />
              {course[1]}
            </p>
          </>
        );
      })}
    </>
  );
}

export default Education;
