import Container from './Container'

export default function Welcome() {

  return (
    <header>
      <div className="header-wrapper">

        <Container>

          <h1>Main Title</h1>
          <p className='description'>Qui tenetur amet nisi, voluptate totam voluptates possimus tempora assumenda vitae quas in earum voluptas ad maiores esse laboriosam ipsum. Deserunt eum nihil doloribus, nobis dolores quis nostrum quibusdam dolorum.
          </p>
          <div className="btn-container">
            <a href="#" className="btn-link">Learn more</a>
          </div>

        </Container>

      </div>
    </header>
  )
}