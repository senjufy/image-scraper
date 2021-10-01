import React, { useState, useEffect } from "react";
import Link from "next/link";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleChange(e: any) {
    setInput(e.target.value);
  }

  function handleSubmit(e: any) {
    if (input !== "") {
      setShow(true);
    }
  }

  function hide() {
    setInput("");
    setShow(false);
  }

  return (
    <div className="sticky top-0 z-50 flex h-16 bg-black">
      <img
        src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/36-simple-512.png"
        className="h-12 p-1 ml-20 mt-1"
      />

      <div className="flex mt-3 ml-4">
        <Link href="/">
          <h2
            onClick={hide}
            className="text-white cursor-pointer pt-2 m-0 leading-4 font-semibold text-mg transform hover:text-blue-500 transition duration-500 hover:scale-110"
          >
            Home
          </h2>
        </Link>

        <Link href={{ pathname: "/featured", query: { keyword: "wallpaper" } }}>
          <h2 className="text-white cursor-pointer pt-2 m-0 leading-4 font-semibold text-mg ml-4 transform hover:text-blue-500 transition duration-500 hover:scale-110">
            Wallpapers
          </h2>
        </Link>

        <Link href={{ pathname: "/featured", query: { keyword: "nature" } }}>
          <h2 className="text-white cursor-pointer pt-2 m-0 leading-4 font-semibold text-md ml-4 transform hover:text-blue-500 transition duration-500 hover:scale-110">
            Nature
          </h2>
        </Link>
        <h2
          onClick={handleScroll}
          className="text-white cursor-pointer pt-2 m-0 leading-4 font-semibold text-md ml-4 transform hover:text-blue-500 transition duration-500 hover:scale-110"
        >
          More
        </h2>
      </div>
      <div className="flex">
        <div className="absolute self-center">
          <div className="relative top-0 group">
            <div className="ml-80 py-3 pl-3 pr-40 absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <input
              type="text"
              className="relative text-white ml-80 py-3 pl-3 pr-40 bg-black rounded-lg leading-none"
              placeholder="search free images"
              onChange={handleChange}
              value={input}
            />
            {show ? (
              <Link href="/">
                <CloseIcon className="relative" onClick={hide} />
              </Link>
            ) : (
              <Link
                href={{ pathname: "/searchRes", query: { keyword: input } }}
              >
                <SearchIcon
                  className="relative ml-1 group-hover:text-white transition duration-200"
                  onClick={handleSubmit}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
      <Link href={{ pathname: "/userPage", query: { keyword: "login" } }}>
        <h2 className="text-white cursor-pointer mt-5 m-0 ml-105 leading-4 font-semibold text-md transform hover:text-blue-500 transition duration-500 hover:scale-110">
          Login/Register
        </h2>
      </Link>
    </div>
  );
}

export default Header;
