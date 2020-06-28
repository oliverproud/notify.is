import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>

      <div className="intro-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Notify.is</h1>
        <p>Get notified when your favourite username on Instagram becomes available.</p>
      </div>

      <div className="container">
        <div className="card mb-4 shadow-sm text-center">
          <div className="card-body">
            <h1 className="card-title card-title">
              <small>You give us</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Your name</li>
              <li>Email address</li>
              <li>Unavailable username</li>
            </ul>
            <Link href="/signup"><a className="btn btn-lg signup-btn">Get notified</a></Link>
          </div>
        </div>
      </div>

    </Layout>
  )
}
