import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="list-inline footer-items">
        <li className="list-inline-item">
          <span>&copy; Notify.is 2020 |</span>
        </li>
        <li className="list-inline-item">
          <Link href="/privacy">
            <a>Privacy |</a>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/tos">
            <a>Terms |</a>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/contact">
            <a>Contact us |</a>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/delete">
            <a>Delete my info</a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}
