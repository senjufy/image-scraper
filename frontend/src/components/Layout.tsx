import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Children = {
  children: any;
};

function Layout({ children }: Children) {
  const router = useRouter();
  const showFooter =
    router.pathname === "/userPage" || router.pathname === "/collection"
      ? false
      : true;
  return (
    <div>
      <>
        <Header />
        {children}
        {showFooter && <Footer />}
      </>
    </div>
  );
}

export default Layout;
