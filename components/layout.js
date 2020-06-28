import Nav from './nav'
import Footer from './footer'
import layout from '../styles/layout.module.css'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className={layout.container}>

      <Head>
        <title>Notify.is</title>
        <meta name="author" content="Oliver Proud"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width maximum-scale=1.0, user-scalable=0"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
      </Head>

      <Nav />

      {children}

      <main className={layout.main}></main>

      <Footer />
    </div>
  )
}
