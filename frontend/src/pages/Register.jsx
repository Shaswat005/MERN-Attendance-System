import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const registerSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).required("Required"),
  });

  const handleRegister = async (values, { resetForm }) => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", values);
      toast.success("Registered successfully!");
      resetForm();
    } catch (err) {
      toast.error(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <Formik initialValues={{ name: "", email: "", password: "" }} validationSchema={registerSchema} onSubmit={handleRegister}>
      <Form>
        <Field name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" />

        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <Field name="password" placeholder="Password" type="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default Register;
