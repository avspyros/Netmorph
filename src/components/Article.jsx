import Container from './Container'

export default function Article({ title, imgPath }) {

  const paragraphData = [
    {
      id: 'par1',
      text: 'Voluptatibus molestias fuga modi non sed dicta ut, dolore a commodi consequatur pariatur temporibus amet dolorem, libero laborum vel animi itaque quod iusto. Maiores eum id quae sint! Mollitia, est.'
    },
    {
      id: 'par2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatum minus, doloribus est deserunt id numquam enim mollitia animi impedit, reprehenderit sapiente tempora consectetur nobis fuga distinctio veniam aspernatur delectus!'
    },
    {
      id: 'par3',
      text: 'Libero laborum vel animi itaque quod iusto. Maiores eum id quae sint! Mollitia, est.'
    }
  ]

  return (
    <div className="article-wrapper">
      <Container>
        <div className="article-header">
          <h2>{title}</h2>
        </div>
        {imgPath &&
          <div className="article-img">
            <img src={imgPath} />
          </div>}
        <div className="article-text">
          {paragraphData.map(paragraph => (
            <p key={paragraph.id}>{paragraph.text}</p>
          ))}
        </div>
      </Container>
    </div>
  )
}
