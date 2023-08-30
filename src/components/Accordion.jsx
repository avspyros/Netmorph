import story from '../story'
import AccordionItem from './AccordionItem'

export default function Accordion() {

  return (
    <div className="accordion-wrapper">
      <div className="accordion">
        {story.map(({ id, title, content }) => (
          <AccordionItem key={id} title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

