import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-items">
        <li>
          <span>&copy; Notify.is 2020</span>
        </li>
        <li>
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </li>
        <li>
          <Link href="/tos">
            <a>Terms</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Delete my info</a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}
