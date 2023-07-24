import Container from './Container'
import BlockHeader from './BlockHeader'
import Button from './Button'
import IconLinkedin from './IconLinkedin'
import IconGithub from './IconGithub'

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }

  return (
    <div id="contact" className="contact-wrapper">

      <Container>

        <BlockHeader
          title="Get in touch"
          description="Use the following to contact me"
        />

        <div className="contact-blocks">

          <form className="contact-form" autoComplete='off' onSubmit={handleSubmit}>
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