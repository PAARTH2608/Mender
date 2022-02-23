import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // const { data: session, status } = useSession();
  return (
    <>
      <Head>
        <link rel="icon" href="/technology.jpg" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
