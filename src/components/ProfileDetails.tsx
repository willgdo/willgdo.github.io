import { ReactNode } from "react";
import { NAV_ITEMS, SectionId } from "../types/navigation";

interface ProfileDetailsProps {
  isExpanded: boolean;
  activeSection: SectionId;
  onSelectSection: (id: SectionId) => void;
  renderContent: () => ReactNode;
}

export default function ProfileDetails({
  isExpanded,
  activeSection,
  onSelectSection,
  renderContent,
}: ProfileDetailsProps) {
  return (
    <aside
      className={`details-panel ${isExpanded ? "details-panel--visible" : ""}`}
    >
      <div className="details-container">
        <nav className="details-nav" aria-label="Navegação secundária">
          <ul className="details-nav-list">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  className={`nav-tab-btn ${activeSection === id ? "nav-tab-btn--active" : ""}`}
                  onClick={() => onSelectSection(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section className="details-body">{renderContent()}</section>
      </div>
    </aside>
  );
}
