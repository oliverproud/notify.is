import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function ConfirmDelete() {
  return (
    <Layout>
      <Head>
        <title>Confirmation of Deletion - Notify.is</title>
      </Head>

      <div className="container-center">
        <div className="intro-header px-4">
          <h1 className="h1">Please check your email.</h1>
          <p>
            If your information matches our stored data you should receive a
            confirmation email within the next few minutes.
          </p>
        </div>
      </div>
    </Layout>
  );
}
