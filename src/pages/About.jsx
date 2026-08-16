function About() {
  return (
    <>
      <section id="about" className="section">
        <div className="section-title">
          <span>01</span>
          <h2>About Me</h2>
        </div>
        <div className="about-grid">
          <div>
            <p>
              I'm pursuing a Bachelor of Technology in Computer Science and
              Engineering at NIT Warangal with a CGPA of 9.53.
            </p>
            <p>
              I enjoy designing scalable backend applications, solving
              algorithmic problems and building full-stack software using
              modern technologies.
            </p>
          </div>
          <div className="info-card">
            <div className="info-row">
              <span>College</span>
              <strong>NIT Warangal</strong>
            </div>
            <div className="info-row">
              <span>Degree</span>
              <strong>B.Tech CSE</strong>
            </div>
            <div className="info-row">
              <span>CGPA</span>
              <strong>9.53 / 10</strong>
            </div>
            <div className="info-row">
              <span>Location</span>
              <strong>Warangal</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-title">
          <span>02</span>
          <h2>Education</h2>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <span className="year">2024 — Present</span>
            <div>
              <h3>National Institute of Technology Warangal</h3>
              <p>
                Bachelor of Technology
                <br />
                Computer Science and Engineering
              </p>
              <strong>CGPA : 9.53</strong>
            </div>
          </article>
          <article className="timeline-item">
            <span className="year">2023 — 2024</span>
            <div>
              <h3>Asian School, Bahrain</h3>
              <p>CBSE Class XII</p>
              <strong>96.8%</strong>
            </div>
          </article>
          <article className="timeline-item">
            <span className="year">2021 — 2022</span>
            <div>
              <h3>Asian School, Bahrain</h3>
              <p>CBSE Class X</p>
              <strong>99%</strong>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-title">
          <span>03</span>
          <h2>Technical Skills</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-group">
            <h3>Languages</h3>
            <div className="chips">
              <span>C++</span>
              <span>Java</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Frameworks</h3>
            <div className="chips">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>Prisma ORM</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Databases</h3>
            <div className="chips">
              <span>PostgreSQL</span>
              <span>MySQL</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Tools</h3>
            <div className="chips">
              <span>Git</span>
              <span>GitHub</span>
              <span>Postman</span>
              <span>VS Code</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
