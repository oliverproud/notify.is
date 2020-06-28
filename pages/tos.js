import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Privacy() {
  return (
    <Layout>

      <Head>
        <title>Notify.is | Terms of Service</title>
        <meta name="author" content="Oliver Proud"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width maximum-scale=1.0, user-scalable=0"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
      </Head>

      <div className="intro-header px-3 py-3 pt-md-5 pb-md-5 mx-auto">
        <h1 className="display-4">Notify Terms of Service</h1>
        <h3 className="h3-tos">1. Terms</h3>
        <p className="p-tos">By accessing the website at <Link href="/"><a>https://notify.is</a></Link>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local
          laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
        <h3>2. Use Licence</h3>
        <ol type="a">
          <li>Permission is granted to temporarily download one copy of the materials (information or software) on Notify's website for personal, non-commercial transitory viewing only. This is the grant of a licence, not a transfer of title, and under this
            licence you may not:
            <ol type="i">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Notify's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ol>
          </li>
          <li>This licence shall automatically terminate if you violate any of these restrictions and may be terminated by Notify at any time. Upon terminating your viewing of these materials or upon the termination of this licence, you must destroy any
            downloaded materials in your possession whether in electronic or printed format.</li>
        </ol>
        <h3>3. Disclaimer</h3>
        <ol type="a">
          <li>The materials on Notify's website are provided on an 'as is' basis. Notify makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
          <li>Further, Notify does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>
        </ol>
        <h3>4. Limitations</h3>
        <p className="p-tos">In no event shall Notify or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Notify's website,
          even if Notify or a Notify authorised representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential
          or incidental damages, these limitations may not apply to you.</p>
        <h3>5. Accuracy of materials</h3>
        <p className="p-tos">The materials appearing on Notify's website could include technical, typographical, or photographic errors. Notify does not warrant that any of the materials on its website are accurate, complete or current. Notify may make changes to the
          materials contained on its website at any time without notice. However Notify does not make any commitment to update the materials.</p>
        <h3>6. Links</h3>
        <p className="p-tos">Notify has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Notify of the site. Use of any such linked website is at the
          user's own risk.</p>
        <h3>7. Modifications</h3>
        <p className="p-tos">Notify may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
        <h3>8. Governing Law</h3>
        <p className="p-tos">These terms and conditions are governed by and construed in accordance with the laws of United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

        <style jsx>{`
          .p-tos {
            font-size: 18px;
            font-weight: normal;
            margin-top: 20px;
          }
          .h3-tos {
            margin-top: 20px;
          }
          `}
        </style>
      </div>

    </Layout>


)}
