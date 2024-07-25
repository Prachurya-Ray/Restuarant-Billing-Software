import React from "react";
import "./login.css";
// import { GoogleLogin } from "@react-oauth/google";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import signInSchema from "../../validations/SignupValid";


const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  // const navigate = useNavigate();
  // const signInPage = () => {
  //   navigate("/admin-sign-in");
  // };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
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
          <div className="left-side-signin">
            <div className="left-side-main">
              <div>Logo</div>
              <div>
                {" "}
                <h3>Hello, Welcome Back!</h3>
                <p>Sign in to access to your dashboard</p>
              </div>
              <div>
                <form action="" onSubmit={handleSubmit}>
                  <div className="form-main">
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
                      <input type="checkbox" />
                      <label class="" for="">
                        Remember me
                      </label>
                      <div className="for">
                        <a href="/forgetpwd">forgot password</a>
                      </div>
                      <div className="">
                        <button type="submit" className="btn btn-success">
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div>
                  <div>
                    <div className="google-signin">
                      {/* <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          console.log("login successfull",credentialResponse);
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      /> */}
                   
                    </div>
                  </div>

                  <div className="signup-btn">
                    <p>
                      Don't have an account?
                      {/* <p onClick={() => signUpPage()}>Sign Up</p> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side-signin"></div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
