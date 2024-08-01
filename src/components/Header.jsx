import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg myNavBar">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1" to="/">
          Juan Garcia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {" "}
            {/* Changed me-auto to ms-auto */}
            <li className="nav-item fs-3 me-4">
              <Link className="nav-link active" aria-current="page" to="/">
                About
              </Link>
            </li>
            <li className="nav-item fs-3 me-4">
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item fs-3 me-4">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item fs-3 me-4">
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
