import Link from "next/link";
import useData from "../custom-hooks/useData";
import Axios from "axios";
import { toast } from "react-toastify";
import { usePricesStore } from "../store/pricesStore";
import { useCallback } from "react";

const prices = () => {
  const { res, setRes } = usePricesStore(
    useCallback((state) => ({
      res: state.res,
      setRes: state.setRes,
    }))
  );

  const { data, isError } = useData(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const deleteItem = async (item) => {
    try {
      const data = await Axios.delete(
        `https://jsonplaceholder.typicode.com/users/${item}`
      );
      if (data.status === 200) {
        toast("Deleted successfully!", {
          type: "success",
        });
        const newResult = res.filter((res) => {
          return res.id !== item;
        });
        setRes(newResult);

        return;
      }
      return alert("Unable to delete");
    } catch (error) {
      alert(error);
    }
  };
  if (!res.length && data) {
    setRes(data);
  }
  if (isError) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="card mb-5">
      {res.map((each) => {
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
