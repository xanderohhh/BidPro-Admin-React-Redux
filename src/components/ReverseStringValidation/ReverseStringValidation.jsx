import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addReverseString } from "../../redux/reverseStringSlice";

export const ReverseStringValidation = () => {
  /*
  javascript code
  // */

  const [checked, setChecked] = useState(false);
  const [isPalindrome, setIsPalindrome] = useState(null);
  

  const dispatch = useDispatch();

  const checkboxHandleChange = () => {
    setChecked(!checked);
  };

  const formik = useFormik({
    initialValues: {
      originalString: "",
      reverseString: "",
      isSubmitted: false,
    },
    validate: (values) => {
      const errors = {};

      if (!values.originalString) {
        errors.originalString = "Original String Is Required";
      }

      return errors;
    },
    onSubmit: () => {
      formik.setFieldValue(
        "reverseString",
        formik.values.originalString
              .toLowerCase()
              .split("")
              .reverse()
              .join("")
      );
      formik.setFieldValue("isSubmitted", true);
      if (checked) {
        checkPalindrome();
      }
      dispatch(
        addReverseString({
          originalString: formik.values.originalString,
          reversedString: formik.values.originalString
            .split("")
            .reverse()
            .join(""),
          isPalindrome:
            formik.values.originalString.replace(/\s+/g, "").toLowerCase() ===
            formik.values.originalString
              .replace(/\s+/g, "")
              .toLowerCase()
              .split("")
              .reverse()
              .join(""),
        })
      );
    },
  });

  const clearAll = () => {
    formik.setFieldValue("originalString", "");
    formik.setFieldValue("reverseString", "");
    // Reset touched state for originalString
    formik.setFieldTouched("originalString", false);
    // Resets Clear button to disabled
    formik.setFieldValue("isSubmitted", false);
    setIsPalindrome(null);
    setChecked(false);
  };

  const checkPalindrome = () => {
    if (
      formik.values.originalString.replace(/\s+/g, "").toLowerCase() ===
      formik.values.originalString
              .replace(/\s+/g, "")
              .toLowerCase()
              .split("")
              .reverse()
              .join("")
    ) {
      setIsPalindrome(true);
    } else {
      setIsPalindrome(false);
    }
  };

  /*
  JSX
  */
  return (
    <div className="form-group">
      <form
        className="needs-validation"
        onSubmit={formik.handleSubmit}
        noValidate
      >
        <div>
          <h3>Reverse String</h3>

          <div className="input-group mt-1 has-validation">
            <span className="input-group-text">Original String</span>
            <input
              type="text"
              name="originalString"
              className={
                formik.errors.originalString && formik.touched.originalString
                  ? "form-control is-invalid"
                  : "form-control"
              }
              value={formik.values.originalString}
              onChange={formik.handleChange}
            />
            <div className="invalid-feedback">
              {formik.errors.originalString}
            </div>
          </div>

          <div className="input-group mt-1">
            <span className="input-group-text">Reverse String</span>
            <input
              type="text"
              name="reverseString"
              className="form-control"
              value={formik.values.reverseString}
              onChange={formik.handleChange}
              readOnly
            />
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              name="palindromeCheck"
              checked={checked}
              onChange={checkboxHandleChange}
            />
            <label className="form-check-label">
              Is the Original String a palindrome?
            </label>
          </div>

          {checked && isPalindrome === true && (
            <div className="alert alert-primary mt-2">
              Yes, the Original String of{" "}
              <strong>{formik.values.originalString}</strong> is a palindrome.
            </div>
          )}

          {checked && isPalindrome === false && (
            <div className="alert alert-danger mt-2">
              No, the Original String of{" "}
              <strong>{formik.values.originalString}</strong> is not a
              palindrome.
            </div>
          )}

          <div className="mt-1">
            <button type="submit" className="btn btn-primary">
              Display
            </button>
            <button
              type="button"
              className="btn btn-danger mx-1"
              onClick={clearAll}
              disabled={!formik.values.isSubmitted}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
