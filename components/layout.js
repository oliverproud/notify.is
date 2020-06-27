import Nav from './nav'
import Footer from './footer'
import layout from '../styles/layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={layout.container}>
      <Nav />

      {children}

      <main className={layout.main}></main>

      <Footer />
    </div>
  )
}
