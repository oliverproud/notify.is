import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-items">
        <li>
          &copy; Notify.is 2020
        </li>
        <li>
          <Link href="#">
            <a>Privacy</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Terms</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Contact</a>
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
