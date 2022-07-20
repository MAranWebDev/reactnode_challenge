import { Link } from "react-router-dom";
import { Body } from "../components/Layout/Body";

const NotFound = () => {
  return (
    <Body title="404" blank>
      <section className="m-auto text-center">
        <h1 className="display-2">404 Página no encontrada</h1>
        <Link to="/" className="btn btn-outline-dark btn-lg">
          Volver
        </Link>
      </section>
    </Body>
  );
};

export { NotFound };
