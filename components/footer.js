import Link from "next/link";
import {CodeIcon, HeartIcon} from "@primer/octicons-react";

export default function Footer() {

  // Get current year for footer
  var d = new Date();
  var currentYear = d.getFullYear()

  return (
    <footer className="footer">
      <ul className="list-inline footer-items">
        <li className="list-inline-item">
          <span>&copy; {currentYear} Notify.is</span>
        </li>
        <span className="footer-span">|</span>
        <li className="list-inline-item">
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </li>
        <span className="footer-span">|</span>
        <li className="list-inline-item">
          <Link href="/tos">
            <a>Terms</a>
          </Link>
        </li>
        <span className="footer-span">|</span>
        <li className="list-inline-item">
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
        </li>
        <span className="footer-span">|</span>
        <li className="list-inline-item">
          <Link href="/delete">
            <a>Delete my info</a>
          </Link>
        </li>
        <span className="footer-span">|</span>
        <li className="list-inline-item test">
          <a href="https://github.com/oliverproud/notify.is/">View on GitHub</a>
        </li>
        <span className="footer-span">|</span>
        <li className="list-inline-item test">
          <span><CodeIcon size={12} /> with <HeartIcon size={12} /></span> by <a href="https://oliverproud.com">Oliver Proud</a>
        </li>
      </ul>

      <style jsx>
        {`
          .footer-span {
            margin-right: 0.5rem;
          }
        `}
      </style>
    </footer>
  );
}
