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

type EducationProps = {
  school: string;
  course: string[];
  main: boolean;
};

export const education: EducationProps[] = [
  {
    school: "PUC Minas",
    course: [
      "Pós-graduação em inteligência artificial e aprendizado de máquina",
    ],
    main: true,
  },
  {
    school: "FATEC Ipiranga - Faculdade de tecnologia",
    course: ["Graduação em análise e desenvolvimento de sistemas"],
    main: true,
  },
  {
    school: "SLEC - Southern Lakes English College",
    course: [
      "Programa de intercâmbio (inglês) realizado em Queenstown - Nova Zelândia",
    ],
    main: true,
  },
  {
    school: "Udemy",
    course: ["JavaScript: Algoritmos + Estruturas de dados"],
    main: false,
  },
  {
    school: "Caelum",
    course: [
      "Desenvolvimento web com HTML, CSS e javaScript",
      "Web apps responsivas com javaScript e jQuery",
    ],
    main: false,
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
    name: "Globant",
    urlLogo: "./assets/globant_logo.jpeg",
    role: "Senior Web UI Developer",
    period: "May/2025 - Current",
    location: "São Paulo",
    type: "Remoto",
    description: "",
  },
  {
    name: "Visto Tecnologia",
    urlLogo: "./assets/visto_tecnologia_logo.jpeg",
    role: "Senior Software Developer",
    period: "Mar/2017 - Dez/2024 (7 anos e 9 meses)",
    location: "São Paulo",
    type: "Remoto",
    description: "",
  },
  {
    name: "Santa Transmedia",
    urlLogo: "./assets/santa_transmedia_logo.jpeg",
    role: "Web Developer",
    period: "Jul/2016 - Jan/2017 (7 meses) ",
    location: "São Paulo",
    type: "Presencial",
    description: "",
  },
  {
    name: "Avelor Tecnologia da Informação",
    urlLogo: "./assets/avelor_logo.jpeg",
    role: "Web Developer (estágio)",
    period: "Out/2015 - Jul/2016 (9 meses)",
    location: "São Paulo",
    type: "Presencial",
    description: "",
  },
];

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
