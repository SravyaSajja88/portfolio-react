import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="section not-found">
      <div className="section-title">
        <span>404</span>
        <h2>Page Not Found</h2>
      </div>
      <p>The page you're looking for doesn't exist or has moved.</p>
      <Link to="/home" className="primary-btn">
        ← Back to Home
      </Link>
    </section>
  )
}

export default NotFound
