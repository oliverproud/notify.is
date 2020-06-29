import Navigation from './nav'
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
      </Head>

      <Navigation />

      {children}

      <main className={layout.main}></main>

      <Footer />
    </div>
  )
}
