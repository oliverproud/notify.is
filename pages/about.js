import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import IntroHeader from '../components/introHeader'

export default function About() {
  return (
    <Layout>

      <Head>
        <title>About - Notify.is</title>
      </Head>

      <div className="container-center">
        <IntroHeader>
          <h1 className="display-4">About</h1>
          <p className="p-about">We know how frustrating it is when your favourite username is taken, that's why we built Notify.</p>
          <p className="p-about">We automatically check with Instagram for the availability of your username, when it's available we'll send you an email letting you know.</p>
          <p className="p-about">Sound good? Get notified with just your: </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Unavailable username</li>
          </ul>
          <p className="p-about">No accounts, no passwords. Just an email, from Notify.is.</p>
          <Link href="/signup"><a className="btn about-btn mt-1">Get notified</a></Link>

          <style jsx>{`
            .p-about {
              font-size: 18px;
              font-weight: normal;
              margin-top: 20px;
            }
            .about-btn {
              border-color: #333;
              color: inherit;
              padding: 1rem 3rem!important;
            }
            .about-btn:hover {
              background-color: #333;
              border-color: #333;
              color: #FFF;
            }
            `}
          </style>
        </IntroHeader>
      </div>
    </Layout>
  )
}
