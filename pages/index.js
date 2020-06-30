import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Button from 'react-bootstrap/Button'

export default function Home() {
  return (
    <Layout>
      <div className="container-center">
        <div className="intro-header home px-4">
          <h1 className="display-4">Notify.is</h1>
          <p>Get notified when your favourite username on Instagram becomes available.</p>
          <Link href="/signup">
            <a>
              <Button className="signup-btn mt-2" size="lg">
                Get notified
              </Button>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
          .p-signup {
            font-size: 18px;
          }

          .home {
            max-width: 500px;
          }
          `}
        </style>

        <style jsx global>{`
            .signup-btn {
              background-color: #333!important;
              border-color: #333!important;
              padding: 1rem 2rem!important;
              color: #FFF!important;
            }

            .signup-btn:hover {
              background-color: #FFF!important;
              border-color: #333!important;
              color: inherit!important;
            }
            `}
          </style>
    </Layout>
  )
}
