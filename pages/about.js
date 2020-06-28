import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>

      <Head>
        <title>About - Notify.is</title>
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
        <p className="p-about">No accounts, no passwords. Just an email, from Notify.</p>
        <Link href="/signup"><a className="btn nav-btn">Get notified</a></Link>

        <style jsx>{`
          .p-about {
            font-size: 18px;
            font-weight: normal;
            margin-top: 20px;
          }
          `}
        </style>
      </div>

    </Layout>


)}
