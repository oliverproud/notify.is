import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Footer from '../components/footer'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Notify.is</title>
      <meta name="author" content="Oliver Proud"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
    </Head>

    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white">
      <Link href="/">
        <a className="my-0 mr-md-auto">
          <img src="/notify-logo.svg" width="30" height="30" alt="notify logo" />
        </a>
      </Link>

      <nav className="my-3 my-md-0 mr-md-3">
        <Link href="#"><a className="p-2">About</a></Link>
        <Link href="#"><a className="p-2">Contact us</a></Link>
      </nav>
      <Link href="#"><a className="btn nav-btn">Get notified</a></Link>
    </div>

    <div className="intro-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Notify.is</h1>
      <p>Get notified when your favourite username on Instagram becomes available.</p>
    </div>

    <div className="container">
      <div className="card mb-4 shadow-sm text-center">
        <div className="card-body">
          <h1 className="card-title card-title">
            <small className="text-muted">You give us</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>Your name</li>
            <li>Email address</li>
            <li>Unavailable username</li>
          </ul>
          <button type="button" className="btn btn-lg signup-btn">Get notified</button>
        </div>
      </div>

      <footer className="pt-4 my-md-5 pt-md-4 border-top">
        <ul className="list-unstyled text-small footer-menu">
          <li>
            &copy; Notify.is 2020</li>
          <li>
            <Link href="#"><a>Privacy</a></Link>
          </li>
          <li>
            <Link href="#"><a>Terms</a></Link>
          </li>
          <li>
            <Link href="#"><a>Contact</a></Link>
          </li>
          <li>
            <Link href="#"><a>Delete my info</a></Link>
          </li>
        </ul>
      </footer>
    </div>
  </>
)}
