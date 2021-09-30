import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../src/components/Home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Image Scraper</title>
      </Head>
      <HomePage />
    </div>
  );
};

export default Home;
