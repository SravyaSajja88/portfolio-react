import { useState } from 'react'
import { Link } from 'react-router-dom'
import TechList from './TechList.jsx'

// ProjectCard is fully generic: every piece of content it renders comes in
// via props. It has zero hardcoded project content of its own.
function ProjectCard({ id, title, description, techStack, features, image, link }) {
  // Local state scoped to THIS card instance only. Because useState lives
  // inside the component (not lifted to the parent), each rendered
  // <ProjectCard /> gets its own independent "expanded" flag.
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="project-card">
      {image && (
        <div className="project-card-image">
          <img src={image} alt={title} onError={(e) => (e.target.style.display = 'none')} />
        </div>
      )}

      <h3>{title}</h3>
      <p>{description}</p>

      {/* techStack is drilled one level further down into TechList/TechChip */}
      <TechList techStack={techStack} />

      <div className="project-card-actions">
        <button
          type="button"
          className="secondary-btn"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? 'Hide Details' : 'View Details'}
        </button>
        <Link to={`/projects/${id}`} className="primary-btn small-btn">
          Full Page
        </Link>
      </div>

      {expanded && (
        <ul className="project-card-features">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
          {link && (
            <li>
              <a href={link} target="_blank" rel="noreferrer">
                View source ↗
              </a>
            </li>
          )}
        </ul>
      )}
    </article>
  )
}

export default ProjectCard
