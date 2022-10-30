import "../styles/globals.css";

import "@fontsource/dm-serif-display";
import "@fontsource/raleway";

import Layout from "./layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
