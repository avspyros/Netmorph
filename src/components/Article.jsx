import Container from './Container'

export default function Article({ title, imgPath, alt, paragraph }) {
  return (

    <div className="article-wrapper">
      <Container>
        <div className="article-header">
          <h2>{title}</h2>
        </div>
        {imgPath &&
          <div className="article-img">
            <img src={imgPath} alt={alt} />
          </div>}
        <div className="article-text">
          <p className="article-paragraph">{paragraph}</p>
        </div>
      </Container>
    </div>
  )
}
