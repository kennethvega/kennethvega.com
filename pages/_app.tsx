import "../styles/globals.css";
import "tippy.js/dist/tippy.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ModalContext } from "../context/ModalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalContext>
  );
}
