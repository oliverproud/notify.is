import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Thanks() {
  return (
    <Layout>
      <Head>
        <title>Thanks for Signing Up! - Notify.is</title>
      </Head>

      <div className="container-center">
        <div className="intro-header px-4">
          <h1 className="h1">Thanks for signing up!</h1>
          <p>
            You should receive a confirmation email within the next few minutes.
          </p>
        </div>
      </div>

    </Layout>
  );
}
