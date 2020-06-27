import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Privacy() {
  return (
    <Layout>

      <Head>
        <title>Notify.is | Privacy Policy</title>
        <meta name="author" content="Oliver Proud"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
      </Head>

      <div className="intro-header px-3 py-3 pt-md-5 pb-md-5 mx-auto">
        <h1 className="display-4">Privacy Policy</h1>
        <p className="p-privacy">Your privacy is important to us. It is Notify's policy to respect your privacy regarding any information we may collect from you across our website, <Link  href="/"><a>https://notify.is</a></Link>.</p>
        <p className="p-privacy">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
        <p className="p-privacy">We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure,
          copying, use or modification.</p>
        <p className="p-privacy">We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
        <p className="p-privacy">Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
        <p className="p-privacy">You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
        <p className="p-privacy">Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to <Link href="/"><a className="privacy-contact">contact us.</a></Link></p>
        <p className="p-privacy">This policy is effective as of 25 June 2020.</p>


        <style jsx>{`
          .p-privacy {
            font-size: 18px;
            font-weight: normal;
            margin-top: 20px;
            width: 100%;
          }
          .privacy-contact {
            text-decoration: underline;
          }
          .privacy-contact:hover {
            text-decoration: none;
          }
          `}
        </style>
      </div>

    </Layout>


)}
