import React from "react";
import { useFormik } from "formik";
export const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Form with Formik</h1>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            id="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <label htmlFor="agw">Age : </label>
          <input
            id="age"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
