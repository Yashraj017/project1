import { useState } from "react";
import Navbar from "./Navbar";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h2>
        <div className="text-center mb-3">
          <button className="btn btn-outline-primary me-2" onClick={() => setIsSignIn(true)}>Sign In</button>
          <button className="btn btn-outline-primary" onClick={() => setIsSignIn(false)}>Sign Up</button>
        </div>
        <form>
          {!isSignIn && (
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
          )}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>
          {!isSignIn && (
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm your password" />
            </div>
          )}
          <button type="submit" className="btn btn-primary">{isSignIn ? "Sign In" : "Sign Up"}</button>
        </form>
      </div>
    </>
  );
}

export default Login;
