import { useState } from 'react'

const initialValues = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Message is required.'
  return errors
}

function ContactForm() {
  // Every input is a controlled component: value + onChange bound to state.
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const currentErrors = validate(values)
  const isValid = Object.keys(currentErrors).length === 0

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleBlur(e) {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validate({ ...values }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setTouched({ name: true, email: true, message: true })

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setValues(initialValues)
      setTouched({})
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name" className="sr-only">Your Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.name && errors.name && <span className="field-error">{errors.name}</span>}

      <label htmlFor="email" className="sr-only">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email Address"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.email && errors.email && <span className="field-error">{errors.email}</span>}

      <label htmlFor="message" className="sr-only">Your Message</label>
      <textarea
        id="message"
        name="message"
        rows="6"
        placeholder="Write your message..."
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.message && errors.message && <span className="field-error">{errors.message}</span>}

      <button type="submit" disabled={!isValid}>
        Send Message
      </button>

      {submitted && <p className="form-success">Thanks! Your message has been recorded.</p>}
    </form>
  )
}

export default ContactForm
