import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Button from 'react-bootstrap/Button'

export default function DeleteConfirmed() {
  return (
    <Layout>

      <Head>
        <title>Your information has been deleted - Notify.is</title>
      </Head>

      <div className="container-center">
        <div className="intro-header px-4">
          <h1 className="display-4">Your information has been deleted.</h1>
          <p className="p-delete">Thank you for using Notify.is.</p>
          <p className="p-delete"></p>
        </div>
      </div>

      <style jsx>{`
        .p-delete {
          font-size: 20px;
        }
        .display-4 {
          padding-bottom: 20px;
        }
        `}
      </style>

    </Layout>
  )
}
