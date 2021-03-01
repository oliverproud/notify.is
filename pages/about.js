import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import IntroHeader from "../components/introHeader";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Notify.is</title>
      </Head>

      <div className="container-center">
        <IntroHeader>
          <h1 className="h1">About</h1>
          <p>
            We know how frustrating it is when your favourite username is taken,
            that's why we built Notify.is.
          </p>
          <p>
            We automatically check with <b>Instagram</b>, <b>Twitter</b> and{" "}
            <b>GitHub</b> for the availability of your username, when it's
            available we'll send you an email letting you know.
          </p>
          <p>Sound good? Get notified with just your: </p>
          <ul>
            <li>Email address</li>
            <li>Unavailable username</li>
            <li>Service(s) to check with</li>
          </ul>
          <p>
            No accounts, no passwords. Just an email, from Notify.is.
          </p>
          <Link href="/signup">
            <a className="btn about-btn mt-1">Get notified</a>
          </Link>
        </IntroHeader>
      </div>
    </Layout>
  );
}
