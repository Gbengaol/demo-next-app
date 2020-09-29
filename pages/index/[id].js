import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/layout";
import useData from "../../custom-hooks/useData";
const One = () => {
  const router = useRouter();
  const [state, setState] = useState({
    res: [],
  });
  const { data, isError } = useData(
    `https://jsonplaceholder.typicode.com/posts/${router.query.id}/comments`
  );

  if (!state.res.length && data) {
    setState({
      ...state,
      res: data,
    });
  }
  if (isError) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <Layout>
      <div className="container">
        <h1>Comments Under Post {router.query.id}</h1>
        <div>
          {state.res.map((each, i) => {
            return (
              <div className="card mb-2" key={i}>
                <div className="card-header">{each.name}</div>
                <div className="card-body">
                  <h6>Email: {each.email}</h6>
                  <p>{each.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default One;
