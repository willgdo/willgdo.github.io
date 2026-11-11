import { useState } from "react";
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <article className={styles.experienceSection}>
      <header className={styles.header}>
        <h3 className={styles.title}>Experiência Profissional</h3>
        <p className={styles.subtitle}>
          Minhas experiências profissionais, destacando cargos, empresas e
          períodos de atuação.
        </p>
      </header>

      <div className={styles.accordionList}>
        {(experience as ExperienceItem[]).map((item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={`${item.name}-${item.role}-${item.period}`}
              className={`${styles.accordionItem} ${isExpanded ? styles.isOpen : ""}`}
            >
              {/* Gatilho Clicável: APENAS Logo, Nome da Empresa, Cargo e Chevron */}
              <button
                type="button"
                className={styles.accordionTrigger}
                onClick={() => toggleExpand(index)}
                aria-expanded={isExpanded}
              >
                <div className={styles.companySummary}>
                  <div className={styles.logoWrapper}>
                    <img
                      src={item.urlLogo}
                      alt={`Logo ${item.name}`}
                      className={styles.logo}
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>

                  <div className={styles.identity}>
                    <h4 className={styles.companyName}>{item.name}</h4>
                    <span className={styles.roleTitle}>{item.role}</span>
                  </div>
                </div>

                <div className={styles.actionBlock}>
                  <span
                    className={`${styles.chevron} ${isExpanded ? styles.chevronRotated : ""}`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </div>
              </button>

              {isExpanded && (
                <div className={styles.accordionContent}>
                  <div className={styles.metaRow}>
                    <span className={styles.periodBadge}>🗓 {item.period}</span>
                    <span className={styles.locationBadge}>
                      📍 {item.location}
                    </span>
                    <span className={styles.typeBadge}>{item.type}</span>
                  </div>

                  {item.description && (
                    <p className={styles.descriptionText}>{item.description}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
}
