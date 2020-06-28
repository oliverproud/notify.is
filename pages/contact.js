import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>

      <Head>
        <title>Contact us - Notify.is</title>
      </Head>

      <div className="intro-header px-3 py-3 pt-md-5 pb-md-5 mx-auto">
        <h1 className="display-4">Contact</h1>
        <p>Send us an email:</p>
        <h1><a className="a-contact" href="mailto:support@notify.is">support@notify.is</a></h1>

        <style jsx>{`
          a {
            text-decoration: underline;
          }
          a:hover {
            text-decoration: none;
          }
          `}
        </style>
      </div>

    </Layout>


)}
