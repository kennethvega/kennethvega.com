import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import Navbar from "./Navbar";
// import { useScrollPosition } from "../hooks/useScrollPosition";
// import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const Layout = ({ children }: LayoutProps) => {
  // const scrollPosition = useScrollPosition();

  return (
    <>
      <div className="sticky top-0 bg-white bg-opacity-60 backdrop-blur-md z-50 ">
        <Navbar />
      </div>
      <main>{children}</main>
      <footer className="flex flex-col gap-3 justify-center items-center my-4">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
