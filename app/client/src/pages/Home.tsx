import { type FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { setFilter, setName, setDescription } from "../redux/slices/postsSlice";
import {
  usePostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
} from "../redux/services/postsApi";
import { Body } from "../components/Layout/Body";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);
  const { data, error, isLoading, isSuccess } = usePostsQuery("");
  const [createPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const handleFilter = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleCreate = (e: FormEvent) => {
    e.preventDefault();
    if (posts.name.trim() === "" || posts.description.trim() === "") return;
    createPost({ name: posts.name, description: posts.description });
    dispatch(setName(""));
    dispatch(setDescription(""));
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
              value={posts.filter}
              onChange={(e) => dispatch(setFilter(e.target.value))}
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
              {data?.map(({ id, name, description }) => (
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
                value={posts.name}
                onChange={(e) => dispatch(setName(e.target.value))}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                placeholder="Descripción"
                value={posts.description}
                onChange={(e) => dispatch(setDescription(e.target.value))}
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
