import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import IntroHeader from '../components/introHeader'

export default function Contact() {
  return (
    <Layout>

      <Head>
        <title>Contact us - Notify.is</title>
      </Head>

      <div className="container-center">
        <IntroHeader>
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
        </IntroHeader>
      </div>

    </Layout>
  )
}
