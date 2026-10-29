interface AboutProps {
  title: string;
}

function About({ title }: AboutProps) {
  return (
    <>
      <h3>{title}</h3>
      <p>Hello, my friend!</p>
      <p>
        Eu sou Willian (mas pode me chamar de Will). Tenho 31 anos, moro em São
        Paulo, sou casado e pai de um mini adolescente de 4 anos! Além da
        tecnologia, outra grande paixão que tenho é a aviação! Em 2022, realizei
        meu grande sonho e tirei minha licença de piloto.
      </p>
      <p>
        Desde sempre fui fascinado por tecnologia e sabia que essa era a área
        que queria seguir. Hoje, com quase uma década de experiência como
        desenvolvedor, tenho certeza de que fiz a melhor escolha! Ao longo da
        minha trajetória, venho atuando principalmente como desenvolvedor
        front-end, com foco em ReactJS, TypeScript, Microfrontends e Arquitetura
        de UI, sempre explorando novas soluções e aberto a novos desafios!
      </p>
      <p>
        Sou uma pessoa curiosa, que adora aprender e experimentar novas
        tecnologias. Também me considero altamente adaptável a diferentes
        projetos e equipes.
      </p>
      <p>
        Algumas das stacks que já trabalhei: <br />
        <strong>Frontend:</strong> React, Next.js, TypeScript, Microfrontends,
        Design Systems, Web Performance <br />
        <strong>Backend:</strong> Node.js, Python <br />
        <strong>Testing & Observability:</strong> Jest, Playwright, DataDog,
        Dynatrace, Grafana <br />
        <strong>DevOps & Tooling:</strong> Git, Vite, CI/CD pipelines <br />
      </p>
      <p>Se quiser saber algo mais, fique à vontade para entrar em contato!</p>
      <br />
      <br />
    </>
  );
}

export default About;
