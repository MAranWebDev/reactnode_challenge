import { type FormEvent, useState } from "react";
import { Body } from "../components/Layout/Body";

const Home = () => {
  const [filterName, setFilterName] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleFilter = (e: FormEvent) => {
    e.preventDefault();
    if (filterName.trim() === "") return;
  };

  const handleCreate = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() === "" || description.trim() === "") return;
  };

  return (
    <Body title="Inicio">
      <main className="container my-5">
        {/* filter */}
        <section>
          <form onSubmit={handleFilter}>
            <input
              type="text"
              placeholder="Filtro de Nombre"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
            <input type="submit" value="Buscar" />
          </form>
        </section>

        {/* table */}
        <section className="pt-2">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>POST 1</td>
                <td>Hola como están</td>
                <td>
                  <button className="btn btn-outline-danger">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* create */}
        <section>
          <form onSubmit={handleCreate}>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input type="submit" value="Crear" />
          </form>
        </section>
      </main>
    </Body>
  );
};

export { Home };
