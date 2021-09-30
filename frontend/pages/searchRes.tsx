import React, { useEffect, useState } from "react";
import Cards, { CardsNew } from "../src/components/Cards";
import useFetch from "../src/utils/useFetch";
import { useRouter } from "next/router";

function searchRes() {
  const {
    searchPixabay,
    searchUnsplash,
    fetchUnsplash,
    fetchPixabay,
    setSearchPageUnsplash,
    searchPageUnsplash,
    setSearchPagePixabay,
    searchPagePixabay,
  } = useFetch();
  const [mount, setMount] = useState(false);

  const router = useRouter();
  let param: any = router.query.keyword;

  function loadUnsplash() {
    setSearchPageUnsplash(searchPageUnsplash + 1);
    setMount((prev) => !prev);
  }

  function loadPixabay() {
    setSearchPagePixabay(searchPagePixabay + 1);
    setMount((prev) => !prev);
  }

  useEffect(() => {
    fetchUnsplash(param);
    fetchPixabay(param);
  }, [mount]);
  return (
    <div className="max-w-full overflow-hidden bg-gray-100">
      <div className="p-5 mx-auto max-w-screen-xl">
        <h2 className="text-gray-800 font-bold uppercase text-xl">
          From Unsplash
        </h2>
        <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">
          {searchUnsplash.map((allData) => (
            <Cards data={allData} />
          ))}
        </div>
        <button
          onClick={loadUnsplash}
          className="mt-5 h-8 px-3 ml-104 text-sm text-white bg-gray-800 rounded-md border-2 border-purple-500 focus:shadow-outline hover:border-purple-600 hover:bg-purple-600 transition duration-500 hover:scale-105 transform"
        >
          Load more
        </button>
      </div>

      <div className="p-5 mx-auto max-w-screen-xl">
        <h2 className="text-gray-800 font-bold uppercase text-xl">
          From Pixabay
        </h2>
        <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">
          {searchPixabay.map((all) => (
            <CardsNew newData={all} />
          ))}
        </div>
        <button
          onClick={loadPixabay}
          className="mt-5 h-8 px-3 ml-104 text-sm text-white bg-gray-800 rounded-md border-2 border-purple-500 focus:shadow-outline hover:border-purple-600 hover:bg-purple-600 transition duration-500 hover:scale-105 transform"
        >
          Load more
        </button>
      </div>
    </div>
  );
}

export default searchRes;
