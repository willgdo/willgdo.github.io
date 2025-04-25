interface EducationProps {
  title: string;
}

function Education({ title }: EducationProps) {
  return (
    <>
      <h3>{title}</h3>
      <p>
        <strong>PUC Minas</strong>
        <br />
        Pós-graduação em inteligência artificial e aprendizado de máquina
      </p>
      <p>
        <strong>FATEC Ipiranga - Faculdade de tecnologia</strong>
        <br />
        Graduação em análise e desenvolvimento de sistemas
      </p>
      <p>
        <strong>SLEC - Southern Lakes English College</strong>
        <br />
        Programa de intercâmbio (inglês) realizado em Queenstown - Nova Zelândia
      </p>
      <p>
        <strong className="silver">Udemy</strong>
        <br />
        JavaScript: Algoritmos + Estruturas de dados
      </p>
      <p>
        <strong className="silver">Caelum</strong>
        <br />
        Desenvolvimento web com HTML, CSS e javaScript
        <br />
        Web apps responsivas com javaScript e jQuery
      </p>
    </>
  );
}

export default Education;
