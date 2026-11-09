import { useState } from "react";
import Hero from "./components/Hero/Hero";
import ProfileDetails from "./components/ProfileDetails/ProfileDetails";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import { NAV_ITEMS, SectionId } from "./types/navigation";

export default function App() {
  const [isPanelExpanded, setIsPanelExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  const handleSelectSection = (section: SectionId) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "about":
        return <About title={"Sobre"} />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "contact":
        return <Contact />;
    }
  };

  return (
    <div className="layout-container">
      {/* Botão de alternância lateral para desktop */}
      <button
        type="button"
        className={`chevron-toggle ${isPanelExpanded ? "is-hidden" : ""}`}
        onClick={() => setIsPanelExpanded(true)}
        aria-label="Expandir detalhes"
      >
        <img src="./icons/chevron-double.png" alt="" />
      </button>

      {/* Painel Esquerdo: Identificação e Bio */}
      <Hero isExpanded={isPanelExpanded} />

      {/* Painel Direito Desktop: Navegação interna e Conteúdo */}
      <ProfileDetails
        isExpanded={isPanelExpanded}
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        renderContent={renderActiveSection}
      />

      {/* Botão Hamburger (Mobile) */}
      <button
        type="button"
        className="mobile-menu-trigger"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        aria-expanded={isMobileMenuOpen}
        aria-label="Alternar menu de navegação"
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* Drawer Mobile */}
      <nav className={`mobile-drawer ${isMobileMenuOpen ? "is-open" : ""}`}>
        <ul>
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={`drawer-link ${activeSection === id ? "is-active" : ""}`}
                onClick={() => handleSelectSection(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Container visível apenas no fluxo Mobile */}
      <main className="mobile-content-view">{renderActiveSection()}</main>

      <DownloadButton isVisible={isPanelExpanded} />
    </div>
  );
}
