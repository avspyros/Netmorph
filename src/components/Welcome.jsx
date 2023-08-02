import Container from './Container'
import Button from './Button'

export default function Welcome() {

  return (
    <header>
      <div id="welcome" className="header-wrapper">

        <Container>

          <h1>Main Title</h1>
          <p className='description'>Qui tenetur amet nisi, voluptate totam voluptates possimus tempora assumenda vitae quas in earum voluptas ad maiores esse laboriosam ipsum. Deserunt eum nihil doloribus, nobis dolores quis nostrum quibusdam dolorum.
          </p>

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