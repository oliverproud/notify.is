import Head from "next/head";
import Link from "next/link";
import Fade from "react-bootstrap/Fade";
import Layout from "../components/layout";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import IntroHeader from "../components/introHeader";
import { useState, useEffect, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const state = {
  value: "support@notify.is",
  copied: false,
};


export default function Contact() {

  const [copied, setCopied] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    setTimeout(function () {
      setCopied(false);
    }, 3000);
  });

  return (
    <Layout>
      <Head>
        <title>Contact us - Notify.is</title>
      </Head>

      <div className="container-center">
        <IntroHeader>

          <div className="contact-us">
            <h1 className="display-4">Contact</h1>
            <p>Send us an email:</p>
            <h1>
            <CopyToClipboard text={state.value} onCopy={() => setCopied(true)}>
              <span ref={target}>
                <a href="#" className="a-contact">support@notify.is</a>
              </span>
            </CopyToClipboard>
          </h1>
          <Fade in={copied}>
            <Overlay target={target.current} show={copied} placement="bottom">
              {(props) => (
                <Tooltip id="success-tooltip" {...props}>
                  Copied to clipboard! 🎉
                </Tooltip>
              )}
            </Overlay>
          </Fade>
          </div>

          <style jsx>
            {`
              a {
                border-bottom: 3px solid #333;
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
