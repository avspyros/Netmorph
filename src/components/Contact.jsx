import Container from './Container'
import BlockHeader from './BlockHeader'
import IconLinkedin from './IconLinkedin'

export default function Contact() {
  return (
    <div id="contact" className="contact-wrapper">

      <Container>

        <BlockHeader
          title="Get in touch"
          description="Use the following to contact me"
        />

        <div className="contact-blocks">

          <div className="contact-form">
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-col">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-col">
                <label>Message</label>
                <textarea name="message" rows={15} cols={15} />
              </div>
            </div>
          </div>

          <div className="contact-info">
            <div>
              <h3>Adress</h3>
              <p>Parasiou 13</p>
              <p>10440 Athens</p>
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
              <IconLinkedin url="https://www.linkedin.com/in/avspyros/" />
            </div>
          </div>

        </div>

      </Container>

    </div>
  )
}