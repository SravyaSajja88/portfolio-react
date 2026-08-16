import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  // useEffect #1: runs once on mount ([] dependency array) to simulate a
  // brief loading sequence before the hero content appears.
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    // cleanup: cancel the timer if Home unmounts before it fires
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <section className="hero loading-screen" id="home">
        <p className="loading-text">Loading portfolio…</p>
      </section>
    )
  }

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-tag">Computer Science</p>
        <h1>
          Sravya
          <br />
          Sajja
        </h1>
        <p className="hero-desc">
          Computer Science undergraduate at National Institute of Technology
          Warangal. I am passionate about backend engineering, databases,
          scalable systems and software development.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="primary-btn">
            View Projects
          </Link>
          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <img src="/src/assets/profile.jpg" alt="Sravya Sajja" />
      </div>
    </section>
  )
}

export default Home
