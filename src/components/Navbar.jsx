import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'

const links = [
  { to: '/home', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const { theme, toggleTheme } = useTheme()

  // Independent piece of UI state: whether the viewport currently counts as
  // "mobile" width, so the nav can collapse responsively.
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [menuOpen, setMenuOpen] = useState(false)

  // useEffect #: subscribes to window resize for responsive nav behaviour.
  // Includes a cleanup function that removes the listener on unmount.
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="navbar">
      <NavLink to="/home" className="logo" onClick={() => setMenuOpen(false)}>
        SS
      </NavLink>

      {isMobile && (
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
      )}

      <nav className={`nav-menu ${isMobile ? 'nav-menu-mobile' : ''} ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            {link.label}
          </NavLink>
        ))}
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle light and dark theme"
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
