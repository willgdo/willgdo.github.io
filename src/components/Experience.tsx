interface ExperienceProps {
  title: string;
}

function Experience({ title }: ExperienceProps) {
  return (
    <>
      <h3>{title}</h3>

      <div className="exp">
        <div>
          <img
            src="https://media.licdn.com/dms/image/v2/C4D0BAQH2vcrgNsIdJg/company-logo_100_100/company-logo_100_100/0/1630509285586/visto_tecnologia_logo?e=1746662400&v=beta&t=5r4SrE_Zu4NkiPXEkC7LnFhs28V4Ii0nars3p-HrAh4"
            alt="logo visto"
          />
        </div>

        <div>
          <strong>Visto Tecnologia - Senior Software Developer</strong>
          <br />
          <span>
            Mar/2017 - Dez/2024 (7 anos e 9 meses) | São Paulo | Remoto
          </span>
          <br />
        </div>
      </div>

      <div className="exp">
        <div>
          <img
            src="https://media.licdn.com/dms/image/v2/C4D0BAQEl9FKtIuJ7tQ/company-logo_100_100/company-logo_100_100/0/1631373459452/santa_transmedia_logo?e=1746662400&v=beta&t=6uZ7FZtZNV7OgO-1tVzJN03aYDV8hnlbkbNXSwH46aU"
            alt="logo santa transmedia"
          />
        </div>

        <div>
          <strong>Santa Transmedia - Web Developer</strong>
          <br />
          <span>Jul/2016 - Jan/2017 (7 meses) | São Paulo | Presencial</span>
          <br />
        </div>
      </div>

      <div className="exp">
        <div>
          <img
            src="https://media.licdn.com/dms/image/v2/C560BAQEyA2WbdnCdxw/company-logo_200_200/company-logo_200_200/0/1631357099395?e=1746662400&v=beta&t=1jqXwKbH5KncKr5EjvR2RVuy0ncsD23mnweCT4GR_So"
            alt="logo avelor"
          />
        </div>

        <div>
          <strong>
            Avelor Tecnologia da Informação - Web Developer (estágio)
          </strong>
          <br />
          <span>Out/2015 - Jul/2016 (9 meses) | São Paulo | Presencial</span>
          <br />
        </div>
      </div>
    </>
  );
}

export default Experience;
