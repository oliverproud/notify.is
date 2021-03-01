import Head from "next/head";
import Layout from "../components/layout";
import IntroHeader from "../components/introHeader";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from 'react-hot-toast';

const state = {
  value: "support@notify.is",
};

const notify = () => toast.success('Copied to clipboard');

export default function Contact() {

  return (
    <Layout>
      <Head>
        <title>Contact us - Notify.is</title>
      </Head>

      <div className="container-center">
        <IntroHeader>

          <div className="contact-us">
            <h1 className="h1">
            <CopyToClipboard text={state.value} onCopy={notify}>
              <span>
                <a href="#" className="a-contact">support@notify.is</a>
              </span>
            </CopyToClipboard>
          </h1>
          <Toaster position="bottom-right" />
          </div>

          <style jsx>
            {`
              a {
                border-bottom: 3px solid #333;
                text-decoration: none;
              }
              a:hover {
                text-decoration: none;
                border-bottom: none;
              }
            `}
          </style>
        </IntroHeader>
      </div>
    </Layout>
  );
}
