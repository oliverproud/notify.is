import axios from "axios";
import * as Yup from "yup";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import Error from "../components/error";
import Layout from "../components/layout";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { CurrentYear } from "../components/currentYear.js";
import { Formik, Form, Field, ErrorMessage } from "formik";

var instagram = false;
var twitter = false;
var github = false;

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less"),
  email: Yup.string().email("Invalid email address").required("Required"),
  username: Yup.string()
    .test(
      'valid-instagram', "Instagram: may contain only alphanumeric characters, periods, and underscores", function (username){
        var instagramRegex = new RegExp(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/);
        var instagramRes = instagramRegex.test(username)
        if (instagramRes) { // if res is true then the username is valid and the switch can be enabled
          instagram = false;
          return true // return true to tell Yup the field is valid
        } else {
          instagram = true;
          return true // true removes error message
        }
      }
    )
    .test(
      'valid-twitter', "Twitter: may only contain alphanumeric characters or underscores", function (username){
        var twitterRegex = new RegExp(/^[A-Za-z0-9_]{1,15}$/);
        var twitterRes = twitterRegex.test(username)
        if (twitterRes) { // if res is true then the username is valid and the switch can be enabled
          twitter = false;
          return true // return true to tell Yup the field is valid
        } else {
          twitter = true;
          return true // true removes error message
        }
      }
    )
    .test(
      'valid-github', "GitHub: may only contain alphanumeric characters or single hyphens", function (username){
        var githubRegex = new RegExp(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i);
        var githubRes = githubRegex.test(username)
        if (githubRes) { // if res is true then the username is valid and the switch can be enabled
          github = false;
          return true // return true to tell Yup the field is valid
        } else {
          github = true;
          return true // true removes error message
        }
      }
    )
    .required("Required"),
  acceptTerms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions."),
  switchGroup: Yup.array().min(1, "At least one option must be selected"),
});

const initialValues = {
  firstName: "",
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

            // if the field was disabled then don't submit switch value
            if (instagram) {
              var i = values.switchGroup.indexOf("instagram");
              values.switchGroup[i] = null
            }
            if (twitter) {
              var i = values.switchGroup.indexOf("twitter");
              values.switchGroup[i] = null
            }
            if (github) {
              var i = values.switchGroup.indexOf("github");
              values.switchGroup[i] = null
            }

            const data = new URLSearchParams(values);
            const res = await axios
              .post("/api/signup", data)
              .then((response) => {
                Router.push("/thanks");
              })
              .catch((error) => {
                setError(error.message);
              });
            setSubmitting(false);
          }}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form className="form">
              <h1 className="display-4 pb-3">Get notified</h1>

              <div className="form-label-group">
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
                <small id="nameHelp" className="form-text text-muted">
                  Optional
                </small>
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
                    value={instagram ? "" : "instagram"}
                    disabled={instagram}
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
                    Instagram {instagram ? <small className="switch-error">Username incompatible with Instagram</small> : null}
                  </label>
                </div>

                <div className="custom-control custom-switch">
                  <Field
                    type="checkbox"
                    name="switchGroup"
                    id="twitter-switch"
                    value={twitter ? "": "twitter"}
                    disabled={twitter}
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
                    Twitter {twitter ? <small className="switch-error">Username incompatible with Twitter</small> : null}
                  </label>
                </div>

                <div className="custom-control custom-switch">
                  <Field
                    type="checkbox"
                    name="switchGroup"
                    id="github-switch"
                    value={github ? "" : "github"}
                    disabled={github}
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
                    GitHub {github ? <small className="switch-error">Username incompatible with GitHub</small> : null}
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

              <div className="custom-control custom-checkbox pt-3 mb-1">
                <Field
                  type="checkbox"
                  name="acceptTerms"
                  id="acceptTerms"
                  className={`custom-control-input ${
                    touched.acceptTerms && errors.acceptTerms
                      ? "is-invalid"
                      : null
                  }`}
                />
                <label htmlFor="acceptTerms" className="custom-control-label">
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
                disabled={isSubmitting, error}
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
                &copy; {CurrentYear()} Notify.is
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
          .switch-error {
            color: #CB444A;
          }
        `}
      </style>
    </Layout>
  );
}
