import "../styles/globals.css";
import Navbar from "./navbar";
import "@fontsource/dm-serif-display";
import "@fontsource/raleway";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
