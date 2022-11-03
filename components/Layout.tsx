import React, { ReactNode } from "react";
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
      <nav className="sticky top-0 bg-white bg-opacity-60 backdrop-blur-md z-50">
        <Navbar />
      </nav>
      <main>{children}</main>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
};

export default Layout;
