import { useState } from "react";
import Link from "next/link";
import useData from "../custom-hooks/useData";
import Axios from "axios";

const prices = () => {
  const [state, setState] = useState({
    res: [],
  });

  const { data, isError } = useData(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const deleteItem = async (item) => {
    try {
      const data = await Axios.delete(
        `https://jsonplaceholder.typicode.com/users/${item}`
      );
      if (data.status === 200) {
        const newResult = state.res.filter((res) => {
          return res.id !== item;
        });
        setState({
          ...state,
          res: newResult,
        });
        return;
      }
      return alert("Unable to delete");
    } catch (error) {
      alert(error);
    }
  };
  if (!state.res.length && data) {
    setState({
      ...state,
      res: data,
    });
  }
  if (isError) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="card mb-5">
      {state.res.map((each) => {
        return (
          <div
            className="card-header d-flex justify-content-between m-2"
            key={each.id}
          >
            <h5>{each.title}</h5>
            <div>
              <button
                className="btn btn-danger mr-2"
                onClick={() => deleteItem(each.id)}
              >
                X
              </button>
              <Link href="/index/[id]" as={`/index/${each.id}`}>
                <a>
                  <button className="btn btn-secondary">View</button>
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default prices;
