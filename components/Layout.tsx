import dynamic from "next/dynamic";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
const Footer = dynamic(() => import("../components/CallToAction"));
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className="flex flex-col gap-3 justify-center items-center my-4">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
