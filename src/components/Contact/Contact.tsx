import { useState } from "react";
import { social } from "../../utils/utils";
import styles from "./Contact.module.css";

// Mapeamento amigável para exibição limpa em vez de URL pura
const PLATFORM_LABELS: Record<string, { label: string; handle: string }> = {
  linkedin: { label: "LinkedIn", handle: "/in/will-oliveira" },
  github: { label: "GitHub", handle: "@willgdo" },
  email: { label: "E-mail", handle: "willian.goncalves@..." },
  instagram: { label: "Instagram", handle: "@willgdo" },
};

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <article className={styles.contactSection}>
      <header className={styles.header}>
        <h3 className={styles.title}>Vamos conversar?</h3>
        <p className={styles.subtitle}>
          Sinta-se à vontade para me chamar para oportunidades, parcerias ou
          trocar uma ideia sobre arquitetura e código.
        </p>
      </header>

      <div className={styles.grid}>
        {social.map(({ name, url }) => {
          const platform = PLATFORM_LABELS[name.toLowerCase()] || {
            label: name,
            handle: url.replace(/^https?:\/\/(www\.)?/, ""),
          };
          const isEmail =
            url.startsWith("mailto:") || name.toLowerCase() === "email";
          const rawValue = isEmail ? url.replace("mailto:", "") : url;

          return (
            <div key={name} className={styles.card}>
              <a
                href={url}
                target={isEmail ? "_self" : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className={styles.cardLink}
                aria-label={`Acessar ${platform.label}`}
              >
                <div className={styles.iconWrapper}>
                  <img
                    src={`./icons/${name}.png`}
                    alt=""
                    className={styles.icon}
                    loading="lazy"
                  />
                </div>

                <div className={styles.info}>
                  <span className={styles.platformName}>{platform.label}</span>
                  <span className={styles.handle}>{platform.handle}</span>
                </div>

                <span className={styles.arrowIndicator} aria-hidden="true">
                  ↗
                </span>
              </a>

              {isEmail && (
                <button
                  type="button"
                  onClick={() => handleCopy(name, rawValue)}
                  className={styles.copyBtn}
                  title="Copiar e-mail"
                >
                  {copiedKey === name ? "Copiado!" : "Copiar"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
}
