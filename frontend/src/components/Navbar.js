import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f2f2f2" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/designs">Designs</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
