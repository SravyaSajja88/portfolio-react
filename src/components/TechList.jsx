// TechChip is the "grandchild" in the prop-drilling chain:
// Projects (page) -> ProjectCard (child) -> TechList (grandchild) -> TechChip (great-grandchild)
// Each component only forwards the slice of data the next one needs.
function TechChip({ label }) {
  return <li className="tech-chip">{label}</li>
}

function TechList({ techStack }) {
  return (
    <ul className="tech-list">
      {techStack.map((tech) => (
        <TechChip key={tech} label={tech} />
      ))}
    </ul>
  )
}

export default TechList
