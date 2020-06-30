import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import IntroHeader from '../components/introHeader'

export default function About() {
  return (
    <Layout>

      <Head>
        <title>Delete my info - Notify.is</title>
      </Head>

      <div className="container-center">
        <form className="form-signup">
        <h1 className="display-4">Delete my info</h1>
        <small className="text-muted">Note: we will be unable to provide our services if you delete your information.</small>
          <div className="form-row mt-4">
            <div className="form-label-group col">
              <input type="text" id="inputFirstName" className="form-control" placeholder="First name" required />
              <label htmlFor="inputFirstName">First name</label>
            </div>

            <div className="form-label-group col">
              <input type="text" id="inputLastName" className="form-control" placeholder="Last name"  required />
              <label htmlFor="inputLastName">Last name</label>
            </div>
          </div>

          <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            <label htmlFor="inputEmail">Email address</label>
          </div>

          <div className="checkbox pt-3 mb-1">
            <label>
              <input type="checkbox" value="agree" required/> By checking this box you are confirming you want to delete your data.
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Delete</button>
          <p className="mt-4 mb-3 text-muted text-center">&copy; Notify.is 2020</p>
        </form>
      </div>

      <style jsx>{`
        .display-4 {
          font-weight: 700;
        }
            `}
      </style>

    </Layout>
  )
}
