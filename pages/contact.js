import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>

      <Head>
        <title>Notify.is | Contact</title>
        <meta name="author" content="Oliver Proud"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
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
