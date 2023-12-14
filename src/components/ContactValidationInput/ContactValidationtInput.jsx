import React from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 3) {
    errors.name = "Name must be atleast three characters";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "You have entered an invalid email address";
  }

  if (!values.phonenumber) {
    errors.phonenumber = "Phone number is required";
  } else if (
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(
      values.phonenumber
    )
  ) {
    errors.phonenumber = "You have entered an invalid phone number";
  }

  return errors;
};

export const ContactValidationInput = ({ addContact }) => {
  //Java Script
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
    },
    validate,
    onSubmit: (values) => {
      addContact(values);
    },
  });

  //JSX
  return (
    <>
      <div className="form-group">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <h3>Contact Form</h3>
          </div>
          <div className="mt-1">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="alert alert-danger mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>
          <div className="mt-1">
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              name="email"
              id="email"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="alert alert-danger mt-1">
                {formik.errors.email}
              </div>
            )}{" "}
          </div>
          <div className="mt-1">
            <input
              type="number"
              placeholder="Phone Number"
              className="form-control"
              name="phonenumber"
              value={formik.values.phonenumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phonenumber && formik.errors.phonenumber && (
              <div className="alert alert-danger mt-1">
                {formik.errors.phonenumber}
              </div>
            )}{" "}
            <div>
              <button className="btn btn-primary mt-1">Submit Contact</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

//receiving addContact from Forms.jsx
ContactValidationInput.propTypes = {
  addContact: PropTypes.func,
};