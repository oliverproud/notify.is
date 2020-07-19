import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Button from 'react-bootstrap/Button'

export default function ConfirmDelete() {
  return (
    <Layout>

      <Head>
        <title>Confirmation of Deletion - Notify.is</title>
      </Head>

      <div className="container-center">
        <div className="intro-header px-4">
          <h1 className="display-4">Please check your email.</h1>
          <p className="p-delete">If your information matches our stored data you should receive a confirmation email within the next few minutes.</p>
          <p className="p-delete">Please confirm that you want to delete your information by clicking the link in the email.</p>
          <p className="p-delete">Upon confirmation you will no longer be signed up to our service but you can re-join at any time.</p>
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
