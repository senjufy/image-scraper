import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useFetch from "../src/utils/useFetch";
import Cards, { CardsNew } from "../src/components/Cards";

function featured() {
  const router = useRouter();
  let param: any = router.query.keyword;
  const { searchUnsplash, fetchUnsplash, searchPixabay, fetchPixabay } =
    useFetch();
  useEffect(() => {
    fetchPixabay(param);
    fetchUnsplash(param);
  }, []);

  return (
    <div className="p-5 mx-auto max-w-screen-xl">
      <h2 className="font-bold uppercase text-xl">{param}</h2>
      <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">
        {searchUnsplash.map((all) => (
          <Cards data={all} />
        ))}

        {searchPixabay.map((all) => (
          <CardsNew newData={all} />
        ))}
      </div>
    </div>
  );
}

export default featured;
