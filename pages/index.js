import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="container-center">
        <div className="intro-header home px-4">
          <h1 className="h1">Notify.is</h1>
          <p>
            Get notified when your favourite username on <b>Instagram</b>,{" "}
            <b>Twitter</b> or <b>GitHub</b> becomes available.
          </p>
          <Link href="/signup">
            <a>
              <button className="signup-btn mt-2" size="lg">
                Get notified
              </button>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          .home {
            max-width: 500px;
          }

          .container-center p {
            font-size: 20px;
          }
        `}
      </style>
    </Layout>
  );
}
