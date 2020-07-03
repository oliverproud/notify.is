import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Signup() {
  return (
    <Layout>

      <Head>
        <title>Signup - Notify.is</title>
      </Head>

      <div className="container-center">
        <form className="form">
          <h1 className="display-4 pb-3">Get notified</h1>
          <div className="form-row">
            <div className="form-label-group col">
              <input type="text" id="firstname" name="firstname" className="form-control" placeholder="First name" required />
              <label htmlFor="firstname">First name</label>
            </div>

            <div className="form-label-group col">
              <input type="text" id="lastname" name="lastname" className="form-control" placeholder="Last name"  required />
              <label htmlFor="lastname">Last name</label>
            </div>
          </div>

          <div className="form-label-group">
            <input type="email" id="email" name="email" className="form-control" placeholder="Email address" required />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-label-group" >
            <input type="text" id="username" name="username" autoCorrect="off" autoCapitalize="none" className="form-control" placeholder="Username" required />
            <small id="usernameHelp" className="form-text text-muted">The unavailable username you want.</small>
            <label htmlFor="username">Username</label>
          </div>

          <div className="checkbox pt-3 mb-1">
            <label>
              <input type="checkbox" value="agree" required/> By checking this box you agree to our:
            </label>
          </div>
          <span className="grey termslabel">
            <Link href="/tos"><a className="terms" target="_blank">Terms of Use</a></Link> and <Link href="/privacy"><a className="terms" target="_blank">Privacy Policy</a></Link>
          </span>
          <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Sign up</button>
          <p className="mt-4 mb-3 text-muted text-center">&copy; Notify.is 2020</p>
        </form>
      </div>

      <style jsx>{`
        .display-4 {
          font-weight: 700;
        }

        .terms {
          text-decoration: underline;
        }
        .terms:hover {
          text-decoration: none;
        }
            `}
      </style>

    </Layout>
  )
}
