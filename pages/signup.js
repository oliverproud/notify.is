import * as Yup from "yup";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import Layout from "../components/layout";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { signupHandler } from "../services/signup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import Error from "../components/error";

import axios from "axios";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email addresss`").required("Required"),
  username: Yup.string()
    .max(29, "Must be 29 characters or less")
    .matches(
      /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/,
      "Must contain only letters, numbers, periods, and underscores"
    )
    .required("Required"),
  acceptTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions."),
  switchGroup: Yup.array().required("At least one option must be selected"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  acceptTerms: false, // added for our checkbox
  switchGroup: [], // array for switches
};

export default function Signup() {
  const [error, setError] = useState("");

  return (
    <Layout>
      <Head>
        <title>Signup - Notify.is</title>
      </Head>

      <div className="container-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const data = new URLSearchParams(values);
            const res = await axios
              .post("http://localhost:***REMOVED***/api/signup", data)
              .then((response) => {
                Router.push("/thanks");
              })
              .catch((error) => {
                console.log("Here:", error.message);
                setError(error.message);
              });
            setSubmitting(false);
          }}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form className="form">
              <h1 className="display-4 pb-3">Get notified</h1>
              <div className="form-row">
                <div className="form-label-group col">
                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First name"
                    className={`form-control ${
                      touched.firstName && errors.firstName
                        ? "is-invalid"
                        : null
                    }`}
                  />
                  <label htmlFor="firstname">First name</label>
                  <ErrorMessage
                    component="div"
                    name="firstName"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-label-group col">
                  <Field
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last name"
                    className={`form-control ${
                      touched.lastName && errors.lastName ? "is-invalid" : null
                    }`}
                  />
                  <label htmlFor="lastname">Last name</label>
                  <ErrorMessage
                    component="div"
                    name="lastName"
                    className="invalid-feedback"
                  />
                </div>
              </div>

              <div className="form-label-group">
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

              <div className="form-label-group">
                <Field
                  type="text"
                  name="username"
                  id="username"
                  autoCorrect="off"
                  autoCapitalize="none"
                  placeholder="Username"
                  className={`form-control ${
                    touched.username && errors.username ? "is-invalid" : null
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="username"
                  className="invalid-feedback"
                />
                <small id="usernameHelp" className="form-text text-muted">
                  The unavailable username you want.
                </small>
                <label htmlFor="username">Username</label>
              </div>

              <div>
                <div className="custom-control custom-switch">
                  <Field
                    type="checkbox"
                    name="switchGroup"
                    id="instagram-switch"
                    value="instagram"
                    className={`custom-control-input ${
                      touched.switchGroup && errors.switchGroup
                        ? "is-invalid"
                        : null
                    }`}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="instagram-switch"
                  >
                    Instagram
                  </label>
                </div>

                <div className="custom-control custom-switch">
                  <Field
                    type="checkbox"
                    name="switchGroup"
                    id="twitter-switch"
                    value="twitter"
                    className={`custom-control-input ${
                      touched.switchGroup && errors.switchGroup
                        ? "is-invalid"
                        : null
                    }`}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="twitter-switch"
                  >
                    Twitter
                  </label>
                </div>

                <div className="custom-control custom-switch">
                  <Field
                    type="checkbox"
                    name="switchGroup"
                    id="github-switch"
                    value="github"
                    className={`custom-control-input ${
                      touched.switchGroup && errors.switchGroup
                        ? "is-invalid"
                        : null
                    }`}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="github-switch"
                  >
                    GitHub
                  </label>
                  <ErrorMessage
                    component="div"
                    name="switchGroup"
                    className="invalid-feedback"
                  />
                </div>
                <small id="usernameHelp" className="form-text text-muted">
                  The service(s) we should check with.
                </small>
              </div>

              <div className="form-group form-check pt-3 mb-1">
                <Field
                  type="checkbox"
                  name="acceptTerms"
                  className={`form-check-input ${
                    touched.acceptTerms && errors.acceptTerms
                      ? "is-invalid"
                      : null
                  }`}
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                  By checking this box you agree to our:
                </label>
                <ErrorMessage
                  component="div"
                  name="acceptTerms"
                  className="invalid-feedback"
                />
              </div>
              <span className="grey termslabel">
                <Link href="/tos">
                  <a className="terms" target="_blank">
                    Terms of Use
                  </a>
                </Link>{" "}
                and{" "}
                <Link href="/privacy">
                  <a className="terms" target="_blank">
                    Privacy Policy
                  </a>
                </Link>
              </span>
              <Button
                className="btn-lg btn-primary btn-block mt-4"
                variant="primary"
                disabled={isSubmitting}
                type="submit"
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
                {isSubmitting && <span> Submitting...</span>}
                {!isSubmitting && <span>Sign up</span>}
              </Button>
              {error ? <Error error={error} /> : null}
              <p className="mt-4 mb-3 text-muted text-center">
                &copy; Notify.is 2020
              </p>
            </Form>
          )}
        </Formik>
      </div>

      <style jsx>
        {`
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
  );
}
