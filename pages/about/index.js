import Layout from "../../components/layout";
import Head from "next/head";
import styles from "../../css/about.module.css";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>About Page</title>
      </Head>
      <h1 className={styles.header}>About Next</h1>
      <img src="img/promo.jpg" />
    </Layout>
  );
};

export default index;
