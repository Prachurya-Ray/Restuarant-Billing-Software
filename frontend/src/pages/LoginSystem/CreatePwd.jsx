import React from "react";
import "./login.css";
const SignIn = () => {
  return (
    <>
      <div className="container-signup">
        <div className="d-flex signup-container">
          <div className="left-side-signin">
            <div className="left-side-main">
              <div>Logo</div>
              <div>
                {" "}
                <h3>Create New Password</h3>
                <p>Please enter the OTP number that has been sent to your email/mobile</p>
              </div>
              <div>
                <form action="">
                  <div className="form-main">
                    <div>
                      <label for="">Enter OTP</label>{" "}
                      <input
                        type="text"
                        id=""
                        placeholder="Enter your email"
                        // value={email}
                        // onChange={handleEmailChange}
                      />
                   {/* <p>{message}</p> */}

                    </div>
                    <div>
                      <label for="">Enter New Password</label>{" "}
                      <input
                        type="text"
                        id=""
                        placeholder="Enter your email"
                        // value={email}
                        // onChange={handleEmailChange}
                      />
                   {/* <p>{message}</p> */}

                    </div>
                    <div>
                      <label for="">Enter Confirm Password</label>{" "}
                      <input
                        type="text"
                        id=""
                        placeholder="Enter your email"
                        // value={email}
                        // onChange={handleEmailChange}
                      />
                   {/* <p>{message}</p> */}

                    </div>
                  </div>
                </form>
                <div>
                <div className="">
                        <button type="submit" className="btn btn-success">
                         Reset Password
                        </button>
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
