import Link from 'next/link'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


export default function Navigation() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>
        <Link href="/">
          <a>
            <img src="/notify-logo.svg" width="30" height="30" alt="notify logo" />
          </a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-nav-icon"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/about"><a className="p-2">About</a></Link>
          <Link href="/contact"><a className="p-2">Contact us</a></Link>
          <Link href="/signup"><a className="btn nav-btn">Get notified</a></Link>
        </Nav>
      </Navbar.Collapse>

      <style jsx>{`
        .nav-btn {
          border-color: #333;
          color: inherit;
          margin-left: .5rem!important;
        }

        .nav-btn:hover {
          background-color: #333;
          border-color: #333;
          color: #FFF;
        }
            `}
      </style>
      <style jsx global>{`
        .custom-nav-icon.navbar-toggler {
          border-color: transparent;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgb(51,3,0)' stroke-linecap='square' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")!important;
        }
            `}
      </style>

    </Navbar>


  )
}
