import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function DeleteConfirmed() {
  return (
    <Layout>
      <Head>
        <title>Your information has been deleted - Notify.is</title>
      </Head>

      <div className="container-center">
        <div className="intro-header px-4">
          <h1 className="h1">Your information has been deleted.</h1>
          <p>Thank you for using Notify.is.</p>
        </div>
      </div>
    </Layout>
  );
}
