import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Button from 'react-bootstrap/Button'

export default function Thanks() {

  return (
    <Layout>

      <Head>
        <title>Thanks for Signing Up! - Notify.is</title>
      </Head>

      <div className="container-center">
        <div className="intro-header px-4">
          <h1 className="display-4">Thanks for signing up!</h1>
          <p className="p-signup">You should receive a confirmation email within the next few minutes.</p>
        </div>
      </div>

      <style jsx>{`
        .p-signup {
          font-size: 20px;
        }
        `}
      </style>

    </Layout>
  )
}
