import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  // const scrollPosition = useScrollPosition();

  return (
    <>
      <>
        <Navbar />
      </>
      <main>{children}</main>
      <footer className="flex flex-col gap-3 justify-center items-center my-4">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
