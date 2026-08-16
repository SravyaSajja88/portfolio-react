// Central data source for all project cards.
// Each object is passed entirely via props into <ProjectCard />,
// so the component itself never hardcodes any project content.
const projects = [
  {
    id: 'placepilot',
    title: 'PlacePilot',
    description:
      'Full-stack campus placement management platform built using React, Node.js, Express, PostgreSQL and Prisma ORM.',
    longDescription:
      'PlacePilot streamlines the entire campus placement lifecycle for students, recruiters and the training & placement cell. It handles eligibility checks, application tracking, interview scheduling and document uploads in one place, replacing spreadsheet-based coordination.',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM'],
    features: [
      'JWT Authentication',
      'Role Based Access',
      'Eligibility Engine',
      'Cloudinary Uploads',
    ],
    image: '/src/assets/placepilot.png',
    link: 'https://github.com/SravyaSajja88/placepilot',
  },
  {
    id: 'schema-refactoring-tool',
    title: 'Database Schema Refactoring Tool',
    description:
      'Database schema analysis and normalization platform that parses SQL CREATE TABLE statements and functional dependencies.',
    longDescription:
      'This tool takes raw SQL DDL and a set of functional dependencies, then walks through candidate key discovery, BCNF decomposition and 3NF synthesis, visualising the resulting dependency graph so students can see exactly why a schema is or is not normalized.',
    techStack: ['JavaScript', 'SQL Parser', 'Graph Visualisation'],
    features: [
      'BCNF Decomposition',
      '3NF Synthesis',
      'Candidate Keys',
      'Dependency Graph',
    ],
    image: '/src/assets/schema-tool.png',
    link: 'https://github.com/SravyaSajja88/schema-refactoring-tool',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'Fully responsive personal portfolio built with semantic HTML5 and hand-written CSS3, using CSS custom properties and Grid/Flexbox layouts with no external frameworks.',
    longDescription:
      'The original static version of this very site. Hand-rolled semantic HTML5 and CSS3 with custom properties, Grid and Flexbox layouts, and accessible form markup, later rebuilt into the React application you are viewing now.',
    techStack: ['HTML5', 'CSS3', 'CSS Custom Properties'],
    features: [
      'Semantic HTML5',
      'CSS Grid & Flexbox',
      'Responsive Breakpoints',
      'Accessible Forms',
    ],
    image: '/src/assets/portfolio-site.png',
    link: 'https://github.com/SravyaSajja88/portfolio-website',
  },
]

export default projects
