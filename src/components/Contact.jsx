import Container from './Container'
import BlockHeader from './BlockHeader'

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
                <textarea name="message" rows={4} cols={40} />
              </div>
            </div>


          </div>

          <div className="contact-info">

          </div>

        </div>

      </Container>

    </div>
  )
}