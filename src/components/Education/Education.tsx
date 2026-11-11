import { education } from "../../utils/utils";
import styles from "./Education.module.css";

interface EducationItem {
  school: string;
  course: string[];
  main?: boolean;
}

export default function Education() {
  const items = education as EducationItem[];
  const mainDegrees = items.filter((item) => item.main);
  const complementaryCourses = items.filter((item) => !item.main);

  return (
    <article className={styles.educationSection}>
      <header className={styles.header}>
        <h3 className={styles.title}>Formação & Especializações</h3>
        <p className={styles.subtitle}>
          Minhas experiências acadêmicas e cursos complementares que
          contribuíram para minha formação profissional.
        </p>
      </header>

      {/* Bloco 1: Formação Principal (Graduação / Pós) */}
      <section className={styles.group}>
        <span className={styles.groupHeading}>Formação Acadêmica</span>
        <div className={styles.mainGrid}>
          {mainDegrees.map((item) => {
            const [courseTitle, details] = item.course;
            return (
              <div
                key={`${item.school}-${courseTitle}`}
                className={styles.mainCard}
              >
                <div className={styles.cardTop}>
                  <span className={styles.iconTag}>🎓</span>
                  <span className={styles.academicBadge}>Ensino Superior</span>
                </div>
                <h4 className={styles.courseTitle}>{courseTitle}</h4>
                <p className={styles.schoolName}>{item.school}</p>
                {details && <p className={styles.details}>{details}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bloco 2: Especializações / Cursos Complementares */}
      {complementaryCourses.length > 0 && (
        <section className={styles.group}>
          <span className={styles.groupHeading}>
            Certificações & Complementares
          </span>
          <div className={styles.complementaryGrid}>
            {complementaryCourses.map((item) => {
              const [courseTitle, details] = item.course;
              return (
                <div
                  key={`${item.school}-${courseTitle}`}
                  className={styles.complementaryCard}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.iconTagSmall}>📜</span>
                    <span className={styles.institutionTag}>{item.school}</span>
                  </div>
                  <h4 className={styles.complementaryTitle}>{courseTitle}</h4>
                  {details && <p className={styles.detailsSmall}>{details}</p>}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </article>
  );
}
