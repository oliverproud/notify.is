import Link from 'next/link'

export default function Nav() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3">
      <Link href="/">
        <a className="my-0 mr-md-auto">
          <img src="/notify-logo.svg" width="30" height="30" alt="notify logo" />
        </a>
      </Link>

      <nav className="my-3 my-md-0 mr-md-3">
        <Link href="/about"><a className="p-2">About</a></Link>
        <Link href="/contact"><a className="p-2">Contact us</a></Link>
      </nav>
      <Link href="/signup"><a className="btn nav-btn">Get notified</a></Link>
    </div>
  )
}
