import type { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/slices/postsSlice";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);

  return (
    <div className="container">
      <h1>Hello World</h1>
      <h2>{posts.value}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
};

export { App };
