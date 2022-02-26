import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {/* <Head>
        <link rel="icon" href="/technology.jpg" />
      </Head> */}

      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
