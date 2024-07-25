import React, { useState } from "react";
import "./login.css";
// import { GoogleLogin } from "@react-oauth/google";
// import School from "../../Assets/university.png";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import signUpSchema from "../../validations/SigninValid";

const initialValues = {
  
  email: "",
  password: "",
};

const SignUp = () => {
  // const navigate = useNavigate();
  // const signInPage = () => {
  //   navigate("/admin-sign-in");
  // };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);

  return (
    <>
      <div className="container-signup">
        <div className="d-flex signup-container">
          <div className="right-side"></div>
          <div className="left-side">
            <div className="left-side-main">
              <div>Logo</div>
              <div>Hello, Welcome Back!</div>
              <div className="form-container">
                <form action="" onSubmit={handleSubmit}>
                  <div className="form-main">
                    <div>
                      <label for="">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        name="name"
                        autoComplete="off"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name && (
                        <p className="error">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label for="">Phone Number</label>
                      <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.phoneNumber && touched.phoneNumber && (
                        <p className="error">{errors.phoneNumber}</p>
                      )}
                    </div>
                    <div>
                      <label for="">Email address</label>{" "}
                      <input
                        type="text"
                        id="email"
                        placeholder="Enter your email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && (
                        <p className="error">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label for="">Password</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password && (
                        <p className="error">{errors.password}</p>
                      )}
                    </div>
                    <div>
                      <label for="">Confirm Password</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        placeholder="confirmPassword"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                        <p className="error">{errors.confirmPassword}</p>
                      )}
                    </div>
                    <div>
                      <div className="">
                        <button type="submit" className="btn btn-success">
                          Sign Up
                        </button>
                      </div>
                    </div>

                    <div>
                      <p>
                        When you click 'Signup', you agree with Fetch
                        <Link to="/">Terms and Conditions</Link>, and confirming
                        that you've read our <Link to="/">Privacy Policy</Link>.
                      </p>
                    </div>

                    <div>
                      <p>
                        Already have an account? <a href="/signin">Signin</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
