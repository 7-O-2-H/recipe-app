// import Home from "./index";
import Head from "next/head";
import BurgerMenu from "../components/BurgerMenu";
import Spacer from "../components/Spacer";
export default function App({ Component, pageProps }) {

  // Template
  return (
    <>
      <BurgerMenu />
      <Spacer className="bar-line"/>
      <Head>
        <title>Add to Taste</title>
      </Head>
      <div className="main">
        <Component {...pageProps} />
      </div>
    </>
  );
}