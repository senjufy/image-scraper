import React, { useState } from "react";
import Modal from "react-modal";
import CancelIcon from "@material-ui/icons/Cancel";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useAddImageMutation } from "../generated/graphql";

const customStyles = {
  content: {
    backgroundColor: "#1F2937",
    marginTop: "45px",
    height: "620px",
    width: "1450px",
    borderRadius: "5px",
  },
};

type Props = {
  data?: any | Response;
  newData?: any | Response;
};

export default function Cards({ data }: Props) {
  const [, createImage] = useAddImageMutation();
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  function downloadActual() {
    fetch(data.urls.raw, {
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

  async function addImage() {
    const response = await createImage({
      imgSmall: data.urls.small,
      capturedBy: data.user.name,
      ownerProf: data.user.profile_image.small,
      ownerName: data.user.first_name,
      regularImage: data.urls.regular,
      imgDownload: data.urls.raw,
    });

    if (response.data?.createImage.errors) {
      setShowError(true);
    }
  }

  return (
    <div className="pt-4">
      <img
        onClick={() => setShow(true)}
        className="border border-gray-800 border-solid h-56 w-98 rounded-sm transform hover:border-purple-600 transition duration-500 hover:scale-105"
        alt="Image"
        src={data.urls.small}
        loading="lazy"
      />

      {/* <h2 class="pt-2 m-0 leading-4 font-semibold">{data.user.name}</h2> */}
      <p className="text-gray-700 italic font-medium">
        Captured By- {data.user.name}
      </p>

      <Modal isOpen={show} style={customStyles}>
        <div className="flex mb-1 ml-7">
          {/* <h1 className="font-semibold">{data.user.name}</h1> */}
          <img
            className="rounded-full p-1 h-11 w-11"
            src={data.user.profile_image.small}
          />
          <div
            className="flex flex-col cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const url = data.user.portfolio_url;
              window.open(url, "_blank");
            }}
          >
            <p className="text-white italic font-medium ml-2">
              {data.user.first_name}
            </p>
            <p className="text-xs ml-2 text-white">{data.user.username}</p>
          </div>
          <button
            onClick={() => downloadActual}
            className="ml-97 h-8 px-3 text-sm text-white bg-gray-700 rounded-md border-2 border-purple-500 focus:shadow-outline hover:border-purple-600 hover:bg-purple-600 transition duration-500 hover:scale-105 transform"
          >
            Download
          </button>
          {showError ? (
            <h1 className="text-white text-xs w-3 ml-3">Already Added</h1>
          ) : (
            <AddBoxIcon
              onClick={addImage}
              className="mt-1 ml-2 text-white bg-gray-700 rounded-md border-2 border-purple-500 focus:shadow-outline hover:border-purple-600 hover:bg-purple-600 transition duration-500 hover:scale-105 transform"
            />
          )}

          <CancelIcon
            onClick={() => setShow(false)}
            className="mt-1 right-16 fixed text-white bg-gray-700 rounded-md border border-red-400 focus:shadow-outline hover:border-red-500 hover:bg-red-500 transition duration-500 hover:scale-105 transform"
          />
        </div>

        <div className="">
          <img src={data.urls.regular} className="h-98 w-98 ml-99" />
          <p className="text-white italic font-medium ml-2">
            Description- {data.alt_description}
          </p>
          <div className="flex ml-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                const url = data.links.html;
                window.open(url, "_blank");
              }}
              className="mt-2 h-8 px-3 text-sm text-white bg-gray-700 rounded-md border-2 border-purple-500 focus:shadow-outline hover:border-purple-600 hover:bg-purple-600 transition duration-500 hover:scale-105 transform"
            >
              Visit Unsplash
            </button>
            <img
              className="rounded-full h-11 w-11 mt-0.5 ml-3"
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQEyPaO-E6yv7A/company-logo_200_200/0/1544712398289?e=2159024400&v=beta&t=NCuBVgi3HXdShpGe17avE0rxbd9ePgbIHwSujdCjCCE"
            />
            <p className="text-sm text-white mt-4 ml-2">Powered By Unsplash!</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export function CardsNew({ newData }: Props) {
  const [, createImage] = useAddImageMutation();
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  function downloadActual() {
    fetch(newData.largeImageURL, {
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

  async function addImage() {
    const response = await createImage({
      imgSmall: newData.largeImageURL,
      capturedBy: newData.user,
      ownerProf: newData.userImageURL,
      ownerName: newData.user,
      regularImage: newData.largeImageURL,
      imgDownload: newData.largeImageURL,
    });

    if (response.data?.createImage.errors) {
      setShowError(true);
    }
  }

  return (
    <div className="pt-4">
      <img
        onClick={() => setShow(true)}
        className="border border-gray-800 border-solid h-56 w-98 rounded-sm transform hover:border-purple-600 transition duration-500 hover:scale-105"
        alt="Image"
        src={newData.largeImageURL}
        loading="lazy"
      />

      {/* <h2 class="pt-2 m-0 leading-4 font-semibold">{data.user.name}</h2> */}
      <p className="text-gray-700 italic font-medium">
        Captured By- {newData.user}
      </p>

      <Modal isOpen={show} style={customStyles}>
        <div className="flex mb-1 ml-7">
          {/* <h1 className="font-semibold">{data.user.name}</h1> */}
          <img
            className="rounded-full p-1 h-11 w-11"
            src={newData.userImageURL}
          />
          <div className="flex flex-col cursor-pointer">
            <p className="text-white italic font-medium ml-2">{newData.user}</p>
            <p className="text-xs ml-2 text-white">{newData.user}</p>
          </div>

          <button
            onClick={downloadActual}
            className="ml-97 h-8 px-3 text-sm text-white bg-gray-700 rounded-md border-2 border-purple-500 focus:shadow-outline hover:border-purple-600 hover:bg-purple-600 transition duration-500 hover:scale-105 transform"
          >
            Download
          </button>
          {showError ? (
            <h1 className="text-white text-xs w-3 ml-3">Already Added</h1>
          ) : (
            <AddBoxIcon
              onClick={addImage}
              className="mt-1 ml-2 text-white bg-gray-700 rounded-md border-2 border-purple-500 focus:shadow-outline hover:border-purple-600 hover:bg-purple-600 transition duration-500 hover:scale-105 transform"
            />
          )}
          <CancelIcon
            onClick={() => setShow(false)}
            className="mt-1 right-16 fixed text-white bg-gray-700 rounded-md border border-red-400 focus:shadow-outline hover:border-red-500 hover:bg-red-500 transition duration-500 hover:scale-105 transform"
          />
        </div>

        <div className="">
          <img src={newData.largeImageURL} className="h-98 w-98 ml-99" />
          <div className="flex ml-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                const url = newData.pageURL;
                window.open(url, "_blank");
              }}
              className="mt-2 h-8 px-3 text-sm text-white bg-gray-700 rounded-md border-2 border-purple-500 focus:shadow-outline hover:border-purple-600 hover:bg-purple-600 transition duration-500 hover:scale-105 transform"
            >
              Visit Pixabay
            </button>
            <img
              className="rounded-full p-1.5 h-11 w-11 mt-0.5 ml-3"
              src="https://cdn.pixabay.com/photo/2017/01/17/14/44/pixabay-1987090_960_720.png"
            />
            <p className="text-sm text-white mt-4 ml-2">Powered By Pixabay!</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
