import React, { useEffect, useState } from "react";
import Cards, { CardsNew } from "./Cards";
import useFetch from "../utils/useFetch";
import ImgSlider from "./ImgSlider";
import styled from "styled-components";

function HomePage() {
  const [mount, setMount] = useState(false);

  const styles = {
    background: "#f1f1f1",
    backgroundSize: "cover",
    fontFamily: "Cabin Condensed",
  };

  const {
    pixabay,
    getPixabay,
    unsplash,
    getUnsplash,
    setPageUnsplash,
    pageUnSplash,
    pagePixabay,
    setPagePixabay,
  } = useFetch();

  function loadUnsplash() {
    setPageUnsplash(pageUnSplash + 1);
    setMount((prev) => !prev);
  }

  function loadPixabay() {
    setPagePixabay(pagePixabay + 1);
    setMount((prev) => !prev);
  }

  useEffect(() => {
    getUnsplash();
    getPixabay();
  }, [mount]);

  return (
    <div className="max-w-full overflow-hidden bg-gray-100">
      <ImgSlider />
      <div className="p-5 mx-auto max-w-screen-xl">
        <h2 className="text-gray-800 font-bold uppercase text-xl">
          From Unsplash
        </h2>
        <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">
          {unsplash.map((allData) => (
            <Cards data={allData} />
          ))}
        </div>
        <button
          className="mt-5 h-8 px-3 ml-104 text-sm text-white bg-gray-800 rounded-md border-2 border-purple-500 focus:shadow-outline hover:border-purple-600 hover:bg-purple-600 transition duration-500 hover:scale-105 transform"
          onClick={loadUnsplash}
        >
          Load more
        </button>
      </div>

      <div className="p-5 mx-auto max-w-screen-xl">
        <h2 className="text-gray-800 font-bold uppercase text-xl">
          From Pixabay
        </h2>
        <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">
          {pixabay.map((all) => (
            <CardsNew newData={all} />
          ))}
        </div>
        <button
          className="mt-5 h-8 px-3 ml-104 text-sm text-white bg-gray-800 rounded-md border-2 border-purple-500 focus:shadow-outline hover:border-purple-600 hover:bg-purple-600 transition duration-500 hover:scale-105 transform"
          onClick={loadPixabay}
        >
          Load more
        </button>
      </div>
    </div>
  );
}

export default HomePage;
