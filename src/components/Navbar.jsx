import { Link } from "react-router-dom"

export const Navbar = () => (
  <nav className="navbar navbar-light bg-light">
    <div className="container d-flex justify-content-between">
      <span className="navbar-brand mb-0 h1">Contact List</span>
      <Link to="/add">
        <button className="btn btn-success">Add new contact</button>
      </Link>
    </div>
  </nav>
);
