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
          <h1 className="display-4">Your deletion request has been processed.</h1>
          <p className="p-delete">You should receive a confirmation email within the next few minutes.</p>
          <p className="p-delete">Please confirm you want to delete your information by clicking the link in this email.</p>
          <p className="p-delete">Upon confirmation you will no longer signed up to our service but you can re-join at any time.</p>
        </div>
      </div>

      <style jsx>{`
        .p-delete {
          font-size: 20px;
        }
        `}
      </style>

    </Layout>
  )
}
