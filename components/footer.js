import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="list-inline footer-items">
        <li className="list-inline-item">
          <span>&copy; Notify.is 2020</span>
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
          <a href="https://oliverproud.com">Built by Oliver Proud</a>
        </li>
      </ul>

      <style jsx>{`
          .footer-span {
            margin-right: .5rem;
          }
            `}
      </style>
    </footer>
  )
}
