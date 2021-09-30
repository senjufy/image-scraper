import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Children = {
  children: any;
};

function Layout({ children }: Children) {
  return (
    <div>
      <>
        <Header />
        {children}
        <Footer />
      </>
    </div>
  );
}

export default Layout;
