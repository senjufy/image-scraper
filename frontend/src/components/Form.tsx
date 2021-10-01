import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

function Form() {
  const [, register] = useRegisterMutation();
  const [state, setState] = useState<any>({
    userName: "",
    password: "",
  });
  const [error, setError] = useState<any>({});
  const [mount, setMount] = useState(false);
  const router = useRouter();
  let param: any = router.query.keyword;
  function handleChange(e: any) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    console.log(state);
  }

  async function registerUser() {
    const response = await register({
      username: state.userName,
      password: state.password,
    });
    if (response.data?.register.errors) {
      setError(toErrorMap(response.data.register.errors));
      setMount(true);
    } else if (response.data?.register.user) {
      // worked
      router.push("/");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 h-60">
      <div className="flex flex-col justify-center items-center w-99 h-99 mb-20 border border-purple-600 rounded-sm bg-gray-400">
        {param === "login" ? (
          <h1 className="mb-4 font-semibold text-2xl">Login</h1>
        ) : (
          <h1 className="mb-4 font-semibold text-2xl">Register</h1>
        )}
        <input
          type="text"
          className="h-10 w-80 border border-purple-600 rounded-md leading-none p-1"
          name="userName"
          placeholder="UserName"
          value={state.userName}
          onChange={handleChange}
        />
        <input
          type="text"
          className="mt-3 h-10 w-80 border border-purple-600 rounded-md leading-none p-1"
          name="password"
          placeholder="PassWord"
          typeof="password"
          onChange={handleChange}
        />
        {param === "login" ? (
          <button className="mt-4 h-8 w-20 text-sm text-white bg-gray-800 rounded-md border-2 border-purple-500 focus:shadow-outline hover:border-purple-600 hover:bg-purple-600 transition duration-500 hover:scale-105 transform">
            Login
          </button>
        ) : (
          <button
            onClick={registerUser}
            className="mt-4 h-8 w-20 text-sm text-white bg-gray-800 rounded-md border-2 border-purple-500 focus:shadow-outline hover:border-purple-600 hover:bg-purple-600 transition duration-500 hover:scale-105 transform"
          >
            Register
          </button>
        )}
        {param === "login" ? (
          <Link
            href={{ pathname: "/userPage", query: { keyword: "register" } }}
          >
            <h1 className="mt-2 cursor-pointer text-purple-900">Register?</h1>
          </Link>
        ) : null}

        {mount ? <h1 className="mt-5 text-red-600">{error.username}</h1> : null}
      </div>
    </div>
  );
}

export default Form;
