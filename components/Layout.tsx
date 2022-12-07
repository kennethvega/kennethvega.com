import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navigation from "./navigation/Navigation";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <>
        <Navigation />
      </>
      <main>{children}</main>
      <footer className="flex flex-col gap-3 justify-center items-center my-4">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
