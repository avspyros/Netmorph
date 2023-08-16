import Container from './Container'

export default function Article({ title, img, url, description }) {

  return (
    <div className="article-wrapper">
      <Container>
        <div className="article-header">
          <h2>{title}</h2>
        </div>
        <div className="inner">
          <div className="article-img" style={{ backgroundImage: `url("${img}")` }}></div>
          <div className="article-text">
            {description.map(paragraph => (
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}
            <div className="article-url">
              <a href={url} target="_blank">View Project</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
