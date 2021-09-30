import React from "react";
import Link from "next/link";
import ArrowUpward from "@material-ui/icons/ArrowUpward";

function Footer() {
  return (
    <div className="flex h-16 bg-black">
      <div className="flex mt-4 ml-102">
        <Link href={{ pathname: "/featured", query: { keyword: "anime" } }}>
          <h2 className="text-white cursor-pointer pt-2 m-0 leading-4 font-semibold text-mg ml-4 transform hover:text-blue-500 transition duration-500 hover:scale-110">
            Anime
          </h2>
        </Link>

        <Link href={{ pathname: "/featured", query: { keyword: "fiction" } }}>
          <h2 className="text-white cursor-pointer pt-2 m-0 leading-4 font-semibold text-mg ml-4 transform hover:text-blue-500 transition duration-500 hover:scale-110">
            Fiction
          </h2>
        </Link>

        <Link href={{ pathname: "/featured", query: { keyword: "tvshows" } }}>
          <h2 className="text-white cursor-pointer pt-2 m-0 leading-4 font-semibold text-mg ml-4 transform hover:text-blue-500 transition duration-500 hover:scale-110">
            Tv Shows
          </h2>
        </Link>

        <Link href={{ pathname: "/featured", query: { keyword: "animals" } }}>
          <h2 className="text-white cursor-pointer pt-2 m-0 leading-4 font-semibold text-mg ml-4 transform hover:text-blue-500 transition duration-500 hover:scale-110">
            Animals
          </h2>
        </Link>

        <Link href={{ pathname: "/featured", query: { keyword: "tech" } }}>
          <h2 className="text-white cursor-pointer pt-2 m-0 leading-4 font-semibold text-mg ml-4 transform hover:text-blue-500 transition duration-500 hover:scale-110">
            Tech
          </h2>
        </Link>

        <Link href={{ pathname: "/featured", query: { keyword: "fashion" } }}>
          <h2 className="text-white cursor-pointer pt-2 m-0 leading-4 font-semibold text-mg ml-4 transform hover:text-blue-500 transition duration-500 hover:scale-110">
            Fashion
          </h2>
        </Link>

        <Link href={{ pathname: "/featured", query: { keyword: "travel" } }}>
          <h2 className="text-white cursor-pointer pt-2 m-0 leading-4 font-semibold text-mg ml-4 transform hover:text-blue-500 transition duration-500 hover:scale-110">
            Travel
          </h2>
        </Link>

        <Link href={{ pathname: "/featured", query: { keyword: "food" } }}>
          <h2 className="text-white cursor-pointer pt-2 m-0 leading-4 font-semibold text-mg ml-4 transform hover:text-blue-500 transition duration-500 hover:scale-110">
            Food
          </h2>
        </Link>

        <Link href={{ pathname: "/featured", query: { keyword: "interior" } }}>
          <h2 className="text-white cursor-pointer pt-2 m-0 leading-4 font-semibold text-mg ml-4 transform hover:text-blue-500 transition duration-500 hover:scale-110">
            Interior
          </h2>
        </Link>

        <ArrowUpward
          className="text-white cursor-pointer  mt-2 ml-5 animate-bounce"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
    </div>
  );
}

export default Footer;
