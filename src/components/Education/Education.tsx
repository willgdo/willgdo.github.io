import { education } from "../../utils/utils";
import styles from "./Education.module.css";

interface EducationItem {
  school: string;
  course: string[];
  main?: boolean;
}

export default function Education() {
  return (
    <article className={styles.educationSection}>
      <header className={styles.header}>
        <h3 className={styles.title}>Formação & Especializações</h3>
        <p className={styles.subtitle}>
          Trajetória acadêmica com foco em computação, inteligência artificial e
          aprendizado contínuo.
        </p>
      </header>

      <div className={styles.timeline}>
        {(education as EducationItem[]).map((item) => {
          const [degreeOrTitle, details] = item.course;
          const isMainDegree = Boolean(item.main);

          return (
            <div
              key={`${item.school}-${degreeOrTitle}`}
              className={`${styles.timelineItem} ${isMainDegree ? styles.isMain : ""}`}
            >
              {/* Marcador gráfico da linha */}
              <div className={styles.timelineMarker}>
                <span className={styles.markerDot} />
              </div>

              {/* Conteúdo do Card */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h4 className={styles.schoolName}>{item.school}</h4>
                  {isMainDegree && (
                    <span className={styles.badgePrincipal}>
                      Graduação / Pós
                    </span>
                  )}
                </div>

                <p className={styles.courseTitle}>{degreeOrTitle}</p>

                {details && <p className={styles.courseDetails}>{details}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
