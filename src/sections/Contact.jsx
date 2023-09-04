import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../services'
import Container from '../components/Container'
import BlockHeader from '../components/BlockHeader'
import Button from '../components/Button'
import IconLinkedin from '../icons/IconLinkedin'
import IconGithub from '../icons/IconGithub'

export default function Contact() {

  const [message, setMessage] = useState(null)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text)
        setMessage("Message sent")
      }, (error) => {
        console.log(error.text)
        setMessage("Something went wrong!")
      })
    e.target.reset()
  }

  return (
    <div id="contact" className="contact-wrapper">
      <Container>
        <BlockHeader
          title="Get in touch"
          description="Use the following to contact me"
        />
        <div className="contact-blocks">
          <form ref={form} className="contact-form" autoComplete='off' onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required={true} />
              </div>
              <div className="form-col">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required={true} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label>Message</label>
                <textarea name="message" rows={15} cols={15} required={true} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <Button
                  text="submit"
                  btnType="submit"
                />
              </div>
              <div className="form-col">
                {message && <p className="form-msg">{message}</p>}
              </div>
            </div>

          </form>

          <div className="contact-info">
            <div>
              <h3>Address</h3>
              <p>Parasiou 13</p>
              <p>10440, Athens</p>
              <p>Greece</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>avspyros@gmail.com</p>
            </div>
            <div>
              <h3>Phone</h3>
              <p>+306975166683</p>
            </div>
            <div>
              <h3>Social</h3>
              <div className="social-group">
                <IconLinkedin url="https://www.linkedin.com/in/avspyros/" />
                <IconGithub url="https://github.com/avspyros" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}