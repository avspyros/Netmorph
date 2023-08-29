import Container from '../components/Container'
import Button from '../components/Button'

export default function Welcome() {
  return (
    <header>
      <div id="welcome" className="header-wrapper">
        <div className="section-bg"></div>
        <Container>
          <h1>Spyros Avgoustatos</h1>
          <p className='description'>Flexible UI crafter with diverse experience in front-end development aiming to expand his knowledge across the vast spectrum of web technologies and to become more versatile by collaborating with team members to produce exciting projects for the modern day web.</p>
          <Button
            text="Learn More"
            url="/story"
            btnType="btnLink"
          />
        </Container>
      </div>
    </header>
  )
}