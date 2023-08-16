import { useState } from 'react'

export default function AccordionItem({ title, content }) {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div><h3>{title}</h3></div>
        <div><span>{isActive ? '-' : '+'}</span></div>
      </div>
      {isActive && <div className="accordion-content">
        {content.map(paragraph => (
          <p key={paragraph.id}>{paragraph.text}</p>
        ))}
      </div>}
    </div>
  )
}