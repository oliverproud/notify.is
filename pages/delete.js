import * as Yup from "yup";
import Head from 'next/head';
import Link from 'next/link';
import Router from "next/router";
import Layout from '../components/layout';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { deleteHandler } from "../services/delete";
import { Formik, Form, Field, ErrorMessage } from "formik";


const validationSchema= Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          acceptTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must confirm this action."),
        })

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  acceptTerms: false, // added for our checkbox
}

export default function Delete() {

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
          const res = await deleteHandler(values);
          setSubmitting(false);
        }}
      >
      {({ touched, errors, isSubmitting }) => (
        <Form className="form">
          <h1 className="display-4">Delete my info</h1>
          <small className="text-muted">Note: we will be unable to provide our services if you delete your information.</small>
          <div className="form-row mt-4">
            <div className="form-label-group col">
              <Field
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
                className={`form-control ${touched.firstName && errors.firstName ? "is-invalid" : null}`} />
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
                className={`form-control ${touched.lastName && errors.lastName ? "is-invalid" : null}`} />
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
              className={`form-control ${touched.email && errors.email ? "is-invalid" : null}`} />
            <ErrorMessage
              component="div"
              name="email"
              className="invalid-feedback"
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-group form-check pt-2 mb-1">
            <Field
             type="checkbox"
             name="acceptTerms"
             className={`form-check-input ${touched.acceptTerms && errors.acceptTerms ? "is-invalid" : null}`} />
           <label htmlFor="acceptTerms" className="form-check-label">I confirm I want to delete my data</label>
             <ErrorMessage
               component="div"
               name="acceptTerms"
               className="invalid-feedback"
             />
          </div>
          <Button
            className="btn-lg btn-primary btn-block mt-4"
            variant="primary"
            disabled={isSubmitting}
            type="submit"
            >
            {isSubmitting && <Spinner as="span" animation="grow" size="lg" role="status" aria-hidden="true"/>}
            {isSubmitting && <span> Submitting...</span>}
            {!isSubmitting && <span>Delete</span>}
          </Button>
          <p className="mt-4 mb-3 text-muted text-center">&copy; Notify.is 2020</p>
        </Form>
      )}
        </Formik>
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
