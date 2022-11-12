import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/globals.css";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react"


function MyApp({ Component,
  pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>)
}

export default MyApp;

