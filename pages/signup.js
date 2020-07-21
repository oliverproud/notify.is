import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

import React, { useState } from "react"
import { signupHandler } from "../services/signup"
import Router from "next/router"
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

export default function Signup() {

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    username: ""
  }

  const [inputs, setInputs] = useState(initialValues);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const res = await signupHandler(inputs);
    if (res) {
      setError(res)
      setLoading(false)
    };
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>

      <Head>
        <title>Signup - Notify.is</title>
      </Head>

      <div className="container-center">

        {error ? <p>Error: {error}</p> : null}

        <form className="form" onSubmit={handleSubmit}>
          <h1 className="display-4 pb-3">Get notified</h1>
          <div className="form-row">
            <div className="form-label-group col">
              <input type="text" id="firstname" name="firstname" onChange={handleInputChange} value={inputs.firstname} className="form-control" placeholder="First name" required pattern="[A-Za-z0-9]{1,50}" title="No spaces, numbers or special characters" />
              <label htmlFor="firstname">First name</label>
            </div>

            <div className="form-label-group col">
              <input type="text" id="lastname" name="lastname" onChange={handleInputChange} value={inputs.lastname} className="form-control" placeholder="Last name" required pattern="[A-Za-z0-9]{1,50}" title="No spaces, numbers or special characters" />
              <label htmlFor="lastname">Last name</label>
            </div>
          </div>

          <div className="form-label-group">
            <input type="email" id="email" name="email" onChange={handleInputChange} value={inputs.email} className="form-control" placeholder="Email address" required />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-label-group" >
            <input type="text" id="username" name="username" onChange={handleInputChange} value={inputs.username} autoCorrect="off" autoCapitalize="none" className="form-control" placeholder="Username" required pattern="^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$" />
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
          <Button
            className="btn-lg btn-primary btn-block mt-4"
            variant="primary"
            disabled={methodDoesNotExist}
            type="submit"
            >
            {isLoading && <Spinner as="span" animation="grow" size="lg" role="status" aria-hidden="true"/>}
            {isLoading && <span> Submitting...</span>}
            {!isLoading && <span>Sign up</span>}
          </Button>
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
