import Head from "next/head";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="body">
      <Head>
        <title>Next Application</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        ></link>
        <link rel="icon" href="/promo.jpg" />
      </Head>
      <Navbar />
      <div className="container">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
