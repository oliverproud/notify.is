import Link from "next/link";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navigation() {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <img
                src="/notify-logo.svg"
                width="30"
                height="30"
                alt="notify logo"
              />
            </a>
          </Link>

          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signup">
                <a className="nav-link">Get notified</a>
              </Link>
            </li>
          </ul>

      </div>
    </nav>

  );
}
