import Container from './Container'

export default function Accordion() {

  const accordionData =
  {
    title: 'title 1',
    content: `Voluptatibus molestias fuga modi non sed dicta ut, dolore a commodi consequatur pariatur temporibus amet dolorem, libero laborum vel animi itaque quod iusto. Maiores eum id quae sint! Mollitia, est.`
  }


  const { title, content } = accordionData

  return (
    <div className="accordion-wrapper">
      <Container>
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-title">
              <div><h3>{title}</h3></div>
              <div><span>+</span></div>
            </div>
            <div className="accordion-content">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}