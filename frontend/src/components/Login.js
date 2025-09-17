import { useState } from "react";
import Navbar from "./Navbar";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [useOtp, setUseOtp] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        {!forgotPassword ? (
          <>
            <div className="text-center mb-4">
              <button className="btn btn-outline-primary me-2" onClick={() => { setIsSignUp(false); setForgotPassword(false); }}>Sign In</button>
              <button className="btn btn-outline-success" onClick={() => { setIsSignUp(true); setForgotPassword(false); }}>Sign Up</button>
            </div>

            {isSignUp ? (
              <div>
                <h2 className="text-center mb-4">Sign Up</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <div className="input-group">
                      <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                      <button type="button" className="btn btn-outline-secondary">Send OTP</button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Create your password" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="otp" className="form-label">Enter OTP</label>
                    <input type="text" className="form-control" id="otp" placeholder="Enter OTP sent to phone" />
                  </div>
                  <button type="submit" className="btn btn-success w-100">Register</button>
                </form>
              </div>
            ) : (
              <div>
                <h2 className="text-center mb-4">Sign In</h2>
                <div className="mb-3 text-center">
                  <button className={`btn btn-outline-primary me-2 ${!useOtp ? "active" : ""}`} onClick={() => setUseOtp(false)}>With Password</button>
                  <button className={`btn btn-outline-primary ${useOtp ? "active" : ""}`} onClick={() => setUseOtp(true)}>With OTP</button>
                </div>

                <form>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <div className="input-group">
                      <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                      <button type="button" className="btn btn-outline-secondary">Send OTP</button>
                    </div>
                  </div>

                  {useOtp ? (
                    <>
                      <div className="mb-3">
                        <label htmlFor="otp" className="form-label">Enter OTP</label>
                        <input type="text" className="form-control" id="otp" placeholder="Enter OTP sent to phone" />
                      </div>
                    </>
                  ) : (
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                      <div className="text-end mb-3">
                        <a href="#" className="text-decoration-none" onClick={() => setForgotPassword(true)}>Forgot Password?</a>
                      </div>
                    </div>
                  )}

                  <button type="submit" className="btn btn-primary w-100">Sign In</button>
                </form>
              </div>
            )}
          </>
        ) : (
          <div>
            <h2 className="text-center mb-4">Reset Password</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="phoneReset" className="form-label">Phone Number</label>
                <div className="input-group">
                  <input type="tel" className="form-control" id="phoneReset" placeholder="Enter your registered phone number" />
                  <button type="button" className="btn btn-outline-secondary">Send OTP</button>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="otpReset" className="form-label">Enter OTP</label>
                <input type="text" className="form-control" id="otpReset" placeholder="Enter OTP sent to phone" />
              </div>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">New Password</label>
                <input type="password" className="form-control" id="newPassword" placeholder="Enter new password" />
              </div>
              <button type="submit" className="btn btn-success w-100">Reset Password</button>
              <div className="text-center mt-3">
                <a href="#" onClick={() => setForgotPassword(false)} className="text-decoration-none">Back to Sign In</a>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
