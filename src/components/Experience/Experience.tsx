import { experience } from "../../utils/utils";
import styles from "./Experience.module.css";

interface ExperienceItem {
  name: string;
  urlLogo: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description?: string;
}

export default function Experience() {
  return (
    <article className={styles.experienceSection}>
      <header className={styles.header}>
        <h3 className={styles.title}>Experiência Profissional</h3>
        <p className={styles.subtitle}>
          Quase uma década construindo soluções corporativas, arquiteturas de UI
          e produtos web de alto impacto.
        </p>
      </header>

      <div className={styles.experienceList}>
        {(experience as ExperienceItem[]).map((item) => (
          <div
            className={styles.experienceCard}
            key={`${item.name}-${item.role}-${item.period}`}
          >
            <div className={styles.logoWrapper}>
              <img
                src={item.urlLogo}
                alt={`Logo da empresa ${item.name}`}
                className={styles.logo}
                loading="lazy"
                onError={(e) => {
                  // Fallback elegante caso a imagem remota ou local falhe
                  (e.currentTarget as HTMLElement).style.display = "none";
                }}
              />
            </div>

            <div className={styles.details}>
              <div className={styles.headerBlock}>
                <div>
                  <h4 className={styles.roleTitle}>{item.role}</h4>
                  <span className={styles.companyName}>{item.name}</span>
                </div>

                <div className={styles.tagsGroup}>
                  <span className={styles.periodBadge}>{item.period}</span>
                  <span className={styles.typeBadge}>{item.type}</span>
                </div>
              </div>

              <div className={styles.metaRow}>
                <span className={styles.location}>📍 {item.location}</span>
              </div>

              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
