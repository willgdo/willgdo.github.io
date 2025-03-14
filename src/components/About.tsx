interface AboutProps {
  title: string;
}

function About({ title }: AboutProps) {
  return (
    <>
      <h3>{title}</h3>
      <p>
        Hello, my friend!
        <br />
        Eu sou Willian (mas pode me chamar de Will). Tenho 29 anos, moro em São
        Paulo, sou casado e pai de um mini adolescente de 3 anos! Além da
        tecnologia, outra grande paixão que tenho é a aviação! Em 2019, realizei
        meu grande sonho e tirei minha licença de piloto privado.
        <br />
        <br />
        Desde sempre fui fascinado por tecnologia e sabia que essa era a área
        que queria seguir. Hoje, com quase uma década de experiência como
        desenvolvedor, tenho certeza de que fiz a melhor escolha! Ao longo da
        minha trajetória, atuei principalmente como desenvolvedor front-end e
        também com automação de processos utilizando BPMN (Camunda).
        <br />
        Tive a oportunidade de participar de diversos projetos para grandes
        empresas, como: Santander, Natura, Boticário, Whirlpool, GPA, entre
        outros. Isso me trouxe experiência valiosa em ambientes de alta demanda
        e complexidade.
        <br />
        <br />
        Sou uma pessoa curiosa, que adora aprender e experimentar novas
        tecnologias. Também me considero altamente adaptável a diferentes
        projetos e equipes.
        <br />
        <br />
        Se quiser saber algo mais, fique à vontade para entrar em contato!
      </p>
    </>
  );
}

export default About;
