import Container from './Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <header>
      <div id="footer" className="footer-wrapper">

        <Container>

          <p className='footer-text'><span>&copy; {currentYear} Avspyros Online Portfolio V1.</span> <span>|</span> <span>Designed by Spyros Avgoustatos</span></p>

        </Container>

      </div>
    </header>
  )
}