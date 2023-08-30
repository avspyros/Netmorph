import Container from './Container'

export default function Footer({ bgColor }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div id="footer" className={`footer-wrapper ${bgColor}`}>
        <Container>
          <p className='footer-text'><span>&copy; {currentYear} Avspyros Online Portfolio V1.</span> <span>|</span> <span>Designed by Spyros Avgoustatos</span></p>
        </Container>
      </div>
    </footer>
  )
}