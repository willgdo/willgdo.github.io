export type SectionId = "about" | "education" | "experience" | "contact";

export interface NavigationItem {
  id: SectionId;
  label: string;
}

export const NAV_ITEMS: NavigationItem[] = [
  { id: "about", label: "Sobre" },
  { id: "education", label: "Formação" },
  { id: "experience", label: "Experiência" },
  { id: "contact", label: "Contato" },
];
