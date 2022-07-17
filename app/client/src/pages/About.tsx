import { Body } from "../components/Layout/Body";

const About = () => {
  return (
    <Body title="Sobre nosotros">
      <main className="container my-5">
        <h1>Sobre este proyecto:</h1>
        <p>
          Este proyecto fue realizado para cumplir con la segunda ronda de
          challenges full-stack usando la PERN Stack: Postgres, Express, React,
          Node
        </p>
      </main>
    </Body>
  );
};

export { About };
