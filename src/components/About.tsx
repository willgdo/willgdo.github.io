interface AboutProps {
  isReduced: boolean;
}

function About({ isReduced }: AboutProps) {
  return (
    <>
      <section className={`about ${isReduced ? "a-expanded" : ""}`}></section>
    </>
  );
}

export default About;
