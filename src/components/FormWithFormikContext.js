import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
export const FormWithFormikContext = () => {
  return (
    <div>
      <h1>Form with Formik</h1>
      <Formik
        initialValues={{
          name: "",
          age: 0,
        }}
        onSubmit={(values) => {
          console.log(va);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name field is required")
            .max(15, "Name field should be less than 15"),
          age: Yup.number()
            .max(60, "age should be less than 60")
            .min(10, "age should be more than 10"),
        })}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name">Name : </label>
              <input
                id="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />

              {formik.errors.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : null}
            </div>

            <div>
              <label htmlFor="agw">Age : </label>
              <input
                id="age"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.age}
              />
              {formik.errors.age ? (
                <div style={{ color: "red" }}>{formik.errors.age}</div>
              ) : null}
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
  )}
      </Formik>
    </div>
  );
};
