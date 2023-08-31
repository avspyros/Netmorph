import Container from './Container'

export default function Article({ title, img, url, description }) {

  return (
    <div className="article-wrapper">
      <Container>
        <div className="article-header">
          <h2>{title}</h2>
        </div>
        <div className="article-container">
          <div className="article-img">
            <img src={img} alt={title} />
          </div>
          <div className="article-text">
            {description.map(paragraph => (
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}
            <div className="article-url">
              <a href={url} target="_blank">Visit site</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )

}
