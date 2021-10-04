import React from "react";
import CardUserCollection from "../src/components/CardUserCollection";
import { useImageByCreatorQuery } from "../src/generated/graphql";

function collection() {
  const [{ data }] = useImageByCreatorQuery();
  return (
    <div className="max-w-full overflow-hidden bg-gray-100">
      <div className="p-5 mx-auto max-w-screen-xl">
        <h2 className="text-gray-800 font-bold uppercase text-xl">
          Collections
        </h2>
        <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">
          {data?.imageByCreator.map((allData) => (
            <CardUserCollection collection={allData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default collection;
