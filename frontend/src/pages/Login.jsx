import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleLogin = async (values) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", values);
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!");
    } catch (err) {
      toast.error(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} validationSchema={loginSchema} onSubmit={handleLogin}>
      <Form>
        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <Field name="password" placeholder="Password" type="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default Login;
