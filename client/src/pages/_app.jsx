// import Home from "./index";
import Head from "next/head";
import BurgerMenu from "../components/BurgerMenu"
export default function App({ Component, pageProps }) {

  // Template
  return (
    <>
      <BurgerMenu />
      <Head>
        <title>Add to Taste</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}