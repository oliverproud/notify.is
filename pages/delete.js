import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import IntroHeader from '../components/introHeader'

import React, { useState } from "react"
import { deleteHandler } from "../services/delete"

export default function About() {

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
  }

  const [inputs, setInputs] = useState(initialValues);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await deleteHandler(inputs);
    if (res) setError(res);
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
        <title>Delete my info - Notify.is</title>
      </Head>

      <div className="container-center">
        <form className="form" onSubmit={handleSubmit}>
        <h1 className="display-4">Delete my info</h1>
        <small className="text-muted">Note: we will be unable to provide our services if you delete your information.</small>
          <div className="form-row mt-4">
            <div className="form-label-group col">
              <input type="text" id="firstname" name="firstname" onChange={handleInputChange} value={inputs.firstname} className="form-control" placeholder="First name" required pattern="[A-Za-z0-9]{1,50}" />
              <label htmlFor="firstname">First name</label>
            </div>

            <div className="form-label-group col">
              <input type="text" id="lastname" name="lastname" onChange={handleInputChange} value={inputs.lastname} className="form-control" placeholder="Last name" required pattern="[A-Za-z0-9]{1,50}" />
              <label htmlFor="lastname">Last name</label>
            </div>
          </div>

          <div className="form-label-group">
            <input type="email" id="email" name="email" onChange={handleInputChange} value={inputs.email} className="form-control" placeholder="Email address" required />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            <label htmlFor="email">Email address</label>
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
