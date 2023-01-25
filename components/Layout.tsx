import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navigation from "./navigation/Navigation";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "fallback",
});

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={poppins.className}>
      <>
        <Navigation />
      </>
      <>{children}</>
      <footer className="flex flex-col gap-3 justify-center items-center my-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
