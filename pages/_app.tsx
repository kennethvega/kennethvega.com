import "../styles/globals.css";
import "tippy.js/dist/tippy.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ModalContext } from "../context/ModalContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContext>
      <Layout>
        <Head>
          <title>Kenneth&apos;s Portfolio</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="Kenneth Vega web Portfolio"></meta>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ModalContext>
  );
}
