// import Home from "./index";
import Head from "next/head";
import BurgerMenu from "../components/BurgerMenu";
import Spacer from "../components/Spacer";
export default function App({ Component, pageProps }) {

  // Template
  return (
    <>
      {/* <BurgerMenu /> */}
      {/* <Spacer className="bar-line"/> */}
      <Head>
        <title>Add to Taste</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="main">
        <Component {...pageProps} />
      </div>
    </>
  );
}