import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>

      <Head>
        <title>Notify.is | About</title>
        <meta name="author" content="Oliver Proud"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
      </Head>

      <div className="intro-header px-3 py-3 pt-md-5 pb-md-5 mx-auto">
        <h1 className="display-4">About</h1>
        <p className="p-about">We know how frustrating it is when your favourite username is taken, that's why we built Notify.</p>
        <p className="p-about">We automatically check with Instagram for the availability of your username, when it's available we'll send you an email letting you know.</p>
        <p className="p-about">Sound good? Get notified with just your: </p>
        <ul>
          <li>Favourite username</li>
          <li>Name</li>
          <li>Email address</li>
        </ul>
        <p className="p-about">No accounts, no passwords. Just an email, from Notify. </p>
        <Link href="#"><a className="btn nav-btn">Get notified</a></Link>


        <style jsx>{`
          .p-about {
            font-size: 18px;
            font-weight: normal;
            margin-top: 20px;
            width: 75%;
          }
          `}
        </style>
      </div>

    </Layout>


)}
