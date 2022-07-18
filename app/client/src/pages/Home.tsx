import { type FormEvent, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Body } from "../components/Layout/Body";

const Home = () => {
  const [filterName, setFilterName] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [posts, filterPosts, createPost, deletePost] = useFetch();

  const handleFilter = (e: FormEvent) => {
    e.preventDefault();
    filterPosts(filterName);
    setFilterName("");
  };

  const handleCreate = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() === "" || description.trim() === "") return;
    createPost(name, description);
    setName("");
    setDescription("");
  };

  return (
    <Body title="Inicio">
      <main className="container my-5">
        {/* filter */}
        <section>
          <form
            className="d-flex justify-content-between"
            onSubmit={handleFilter}
          >
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
              {posts.map(({ id, name, description }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => deletePost(id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* create */}
        <section className="text-center">
          <form onSubmit={handleCreate} className="row g-3 justify-content-end">
            <div className="col-auto">
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input type="submit" value="Crear" />
            </div>
          </form>
        </section>
      </main>
    </Body>
  );
};

export { Home };
