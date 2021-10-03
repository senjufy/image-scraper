import React, { useState } from "react";
import Modal from "react-modal";
import CancelIcon from "@material-ui/icons/Cancel";

type Props = {
  collection?: any | Response;
};
const customStyles = {
  content: {
    backgroundColor: "#1F2937",
    marginTop: "45px",
    height: "620px",
    width: "1450px",
    borderRadius: "5px",
  },
};

function CardUserCollection({ collection }: Props) {
  const [show, setShow] = useState(false);

  function downloadActual() {
    fetch(collection.imgDownload, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="pt-4">
      <img
        onClick={() => setShow(true)}
        className="border border-gray-800 border-solid h-56 w-98 rounded-sm transform hover:border-purple-600 transition duration-500 hover:scale-105"
        alt="Image"
        src={collection.imgSmall}
        loading="lazy"
      />

      {/* <h2 class="pt-2 m-0 leading-4 font-semibold">{data.user.name}</h2> */}
      <p className="text-gray-700 italic font-medium">
        Captured By- {collection.capturedBy}
      </p>

      <Modal isOpen={show} style={customStyles}>
        <div className="flex mb-1 ml-7">
          {/* <h1 className="font-semibold">{data.user.name}</h1> */}
          <img
            className="rounded-full p-1 h-11 w-11"
            src={collection.ownerProf}
          />
          <div className="flex flex-col cursor-pointer">
            <p className="text-white italic font-medium ml-2">
              {collection.ownerName}
            </p>
          </div>
          <button
            onClick={() => downloadActual}
            className="ml-97 h-8 px-3 text-sm text-white bg-gray-700 rounded-md border-2 border-purple-500 focus:shadow-outline hover:border-purple-600 hover:bg-purple-600 transition duration-500 hover:scale-105 transform"
          >
            Download
          </button>
          <CancelIcon
            onClick={() => setShow(false)}
            className="mt-1 right-16 fixed text-white bg-gray-700 rounded-md border border-red-400 focus:shadow-outline hover:border-red-500 hover:bg-red-500 transition duration-500 hover:scale-105 transform"
          />
        </div>

        <div className="">
          <img src={collection.regularImage} className="h-98 w-98 ml-99" />
        </div>
      </Modal>
    </div>
  );
}

export default CardUserCollection;
