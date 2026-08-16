import ContactForm from '../components/ContactForm.jsx'

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-title">
        <span>05</span>
        <h2>Get In Touch</h2>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's connect.</h3>
          <p>
            Feel free to reach out regarding internships, projects,
            collaborations or opportunities.
          </p>
          <ul>
            <li>sravya.sajja88@gmail.com</li>
            <li>+91-7993833154</li>
            <li>github.com/SravyaSajja88</li>
            <li>linkedin.com/in/sravya-sajja88</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
