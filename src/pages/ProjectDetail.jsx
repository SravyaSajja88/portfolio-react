import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects.js'
import TechList from '../components/TechList.jsx'

function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <section className="section">
        <div className="section-title">
          <span>!</span>
          <h2>Project Not Found</h2>
        </div>
        <p>We couldn't find a project with id "{projectId}".</p>
        <Link to="/projects" className="primary-btn">
          Back to Projects
        </Link>
      </section>
    )
  }

  return (
    <section className="section project-detail">
      <div className="section-title">
        <span>04</span>
        <h2>{project.title}</h2>
      </div>

      <p className="project-detail-desc">{project.longDescription}</p>

      <h3>Tech Stack</h3>
      <TechList techStack={project.techStack} />

      <h3>Key Features</h3>
      <ul className="project-card-features">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <div className="project-detail-actions">
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="primary-btn">
            View Source ↗
          </a>
        )}
        <Link to="/projects" className="secondary-btn">
          ← Back to Projects
        </Link>
      </div>
    </section>
  )
}

export default ProjectDetail
