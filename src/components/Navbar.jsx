import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home', icon: 'bi-house-door' },
    { to: '/about', label: 'About', icon: 'bi-info-circle' },
    { to: '/services', label: 'Services', icon: 'bi-stars' },
    { to: '/gallery', label: 'Gallery', icon: 'bi-images' },
    { to: '/testimonials', label: 'Stories', icon: 'bi-chat-quote' },
  ]

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            Aishu Petals &amp; Patterns
            <span>Nagercoil · Est. 2012</span>
          </Link>
          <ul className="navbar-links">
            {links.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                  <i className={`bi ${l.icon} nav-icon`}></i>
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/contact" className="navbar-cta">
                <i className="bi bi-calendar-check nav-icon"></i>
                Book Now
              </Link>
            </li>
          </ul>
          <button className="hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-nav">
          <button className="mobile-nav-close" onClick={() => setOpen(false)}>&times;</button>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
              <i className={`bi ${l.icon} nav-icon`}></i>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} style={{ color: 'var(--color-gold)' }}>
            <i className="bi bi-calendar-check nav-icon"></i>
            Book Now
          </Link>
        </div>
      )}
    </>
  )
}
