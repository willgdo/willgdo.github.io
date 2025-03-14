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
        Pós-graduação em Inteligência artificial e aprendizado de máquina
      </p>
      <p>
        <strong>FATEC Ipiranga - Faculdade de tecnologia</strong>
        <br />
        Graduação em Análise e desenvolvimento de Sistemas
      </p>
      <p>
        <strong>SLEC - Southern Lakes English College</strong>
        <br />
        Programa de intercâmbio realizado em Queenstown - Nova Zelândia (Inglês)
      </p>
      <p>
        <strong className="silver">Udemy</strong>
        <br />
        JavaScript: Algoritmos + Estruturas de Dados
      </p>
      <p>
        <strong className="silver">Caelum</strong>
        <br />
        Desenvolvimento Web com HTML, CSS e JavaScript
        <br />
        Web Apps Responsivas com Javascript e jQuery
      </p>
    </>
  );
}

export default Education;
