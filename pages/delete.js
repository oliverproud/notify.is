import axios from "axios";
import * as Yup from "yup";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import Error from "../components/error";
import Layout from "../components/layout";
import Spinner from "react-bootstrap/Spinner";
import { CurrentYear } from "../components/currentYear.js";
import { Formik, Form, Field, ErrorMessage } from "formik";

const validationSchema = Yup.object({

  email: Yup.string().email("Invalid email address").required("Required"),
  acceptTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must confirm this action."),
});

const initialValues = {

  email: "",
  acceptTerms: false, // added for our checkbox
};

export default function Delete() {
  const [error, setError] = useState("");

  return (
    <Layout>
      <Head>
        <title>Delete my info - Notify.is</title>
      </Head>

      <div className="container-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const data = new URLSearchParams(values);
            const res = await axios
              .post("/api/delete", data)
              .then((response) => {
                Router.push("/confirm");
              })
              .catch((error) => {
                setError(error.message);
              });
            setSubmitting(false);
          }}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form className="form">
              <h1 className="h1">Delete my info</h1>
              <small className="text-muted">
                Note: we will be unable to provide our services if you delete
                your information.
              </small>

              <div className="form-floating mt-4">
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  className={`form-control ${
                    touched.email && errors.email ? "is-invalid" : null
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
                <label htmlFor="email">Email address</label>
              </div>

              <div className="form-check pt-3 mb-1">
                <Field
                  type="checkbox"
                  name="acceptTerms"
                  id="acceptTerms"
                  className={`form-check-input ${
                    touched.acceptTerms && errors.acceptTerms
                      ? "is-invalid"
                      : null
                  }`}
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                  I confirm I want to delete my data
                </label>
                <ErrorMessage
                  component="div"
                  name="acceptTerms"
                  className="invalid-feedback"
                />
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-primary btn-lg mt-4"
                  type="submit"
                  disabled={isSubmitting, error}
                  >
                  {isSubmitting && (
                    <Spinner
                      as="span"
                      animation="grow"
                      size="lg"
                      role="status"
                      aria-hidden="true"
                    />
                  )}                  
                  {!isSubmitting && <span>Delete</span>}
                </button>
              </div>
              {error ? <Error error={error} /> : null}
              <p className="mt-4 mb-3 text-muted text-center">
                &copy; {CurrentYear()} Notify.is
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
}
