import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-title">
        <span>04</span>
        <h2>Featured Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            features={project.features}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
