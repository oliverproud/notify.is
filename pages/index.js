import Head from 'next/head'
import Layout from '../components/layout'
import Footer from '../components/footer'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>Notify.is</title>
        <meta name="author" content="Oliver Proud" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={utilStyles.mainHeader}>
        <h1 className={utilStyles.title}>
          Notify is coming soon.
        </h1>
      </main>

      <Footer />
      
    </Layout>
  )
}
