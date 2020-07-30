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
          <p>Get notified when your favourite username on <b>Instagram</b>, <b>Twitter</b> and <b>GitHub</b> becomes available.</p>
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
    </Layout>
  )
}
