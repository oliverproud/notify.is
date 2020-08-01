import Head from "next/head";
import Footer from "./footer";
import Navigation from "./nav";
import layout from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={layout.container}>
      <Head>
        <title>Notify.is</title>
        <meta
          name="google-site-verification"
          content="RF2iO2zoAF3S7_0ZM3QojJKetvUediCtsp68DhKpD4w"
        />
        <meta name="author" content="Oliver Proud" />
        <meta
          name="description"
          content="Notify.is - Get notified when a taken Instagram username becomes available."
        />
        <meta
          name="keywords"
          content="instagram username unavailable, get instagram username, instagram username taken, get taken instagram username, get unavailable instagram username, get unavailable username, get taken username, instagram username taken, taken username, username unavailable"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width maximum-scale=1.0, user-scalable=0"
        />
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
      </Head>

      <Navigation />

      <main className={layout.main}>{children}</main>

      <Footer />
    </div>
  );
}
