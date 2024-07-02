import type { NextPage } from "next";
import Head from "next/head";
import App from "../components/App";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Science and AI Conference</title>
        <meta
          name="description"
          content="Science and AI Conference - Making AI Work for Science"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>
    </div>
  );
};

export default Home;
