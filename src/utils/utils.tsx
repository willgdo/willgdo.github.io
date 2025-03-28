export const stacks: string[] = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "react",
  "redux",
  "nextjs",
  "jest",
  "nodejs",
  "python",
];

export const topics: string[] = ["Sobre", "Formação", "Experiência", "Contato"];

type SocialProps = {
  name: string;
  url: string;
};

export const social: SocialProps[] = [
  {
    name: "whatsapp",
    url: "https://wa.me/+5511965526415",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/willoliveira737/",
  },
  {
    name: "github",
    url: "https://github.com/willgdo",
  },
  {
    name: "codepen",
    url: "https://codepen.io/willgdo",
  },
];

type ExperienceProps = {
  name: string;
  urlLogo: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
};

export const experience: ExperienceProps[] = [
  {
    name: "Visto Tecnologia",
    urlLogo:
      "https://media.licdn.com/dms/image/v2/C4D0BAQH2vcrgNsIdJg/company-logo_100_100/company-logo_100_100/0/1630509285586/visto_tecnologia_logo?e=1746662400&v=beta&t=5r4SrE_Zu4NkiPXEkC7LnFhs28V4Ii0nars3p-HrAh4",
    role: "Senior Software Developer",
    period: "Mar/2017 - Dez/2024 (7 anos e 9 meses)",
    location: "São Paulo",
    type: "Remoto",
    description: "",
  },
  {
    name: "Santa Transmedia",
    urlLogo:
      "https://media.licdn.com/dms/image/v2/C4D0BAQEl9FKtIuJ7tQ/company-logo_100_100/company-logo_100_100/0/1631373459452/santa_transmedia_logo?e=1746662400&v=beta&t=6uZ7FZtZNV7OgO-1tVzJN03aYDV8hnlbkbNXSwH46aU",
    role: "Web Developer",
    period: "Jul/2016 - Jan/2017 (7 meses) ",
    location: "São Paulo",
    type: "Presencial",
    description: "",
  },
  {
    name: "Avelor Tecnologia da Informação",
    urlLogo:
      "https://media.licdn.com/dms/image/v2/C560BAQEyA2WbdnCdxw/company-logo_200_200/company-logo_200_200/0/1631357099395?e=1746662400&v=beta&t=1jqXwKbH5KncKr5EjvR2RVuy0ncsD23mnweCT4GR_So",
    role: "Web Developer (estágio)",
    period: "Out/2015 - Jul/2016 (9 meses)",
    location: "São Paulo",
    type: "Presencial",
    description: "",
  },
];
