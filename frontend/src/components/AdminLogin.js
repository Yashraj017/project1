import { useState } from "react";
import Navbar from "./Navbar";

function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admin login attempt with " + JSON.stringify(credentials));
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" name="username" className="form-control" value={credentials.username} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={credentials.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-dark">Login</button>
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
