// import Home from "./index";
import Head from "next/head";
export default function App({ Component, pageProps }) {

  // Template
  return (
    <>
      <Head>
        <title>Add to Taste</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}