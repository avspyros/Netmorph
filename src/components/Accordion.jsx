import story from '../story'
import AccordionItem from './AccordionItem'
import Container from './Container'

export default function Accordion() {

  return (
    <div className="accordion-wrapper">
      <Container>
        <div className="accordion">
          {story.map(({ id, title, content }) => (
            <AccordionItem key={id} title={title} content={content} />
          ))}
        </div>
      </Container>
    </div>
  )
}

