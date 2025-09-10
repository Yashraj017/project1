import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#d4af37" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/images/Logo.png" alt="Logo" height="80" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/designs">Designs</Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link className="btn btn-outline-primary me-2" to="/login">Sign In / Sign Up</Link>
            <Link className="btn btn-outline-dark" to="/admin">Admin Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
