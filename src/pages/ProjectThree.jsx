import projects from '../projects'
import Article from '../components/Article'

export default function ProjectThree() {

  return (
    <Article
      title={projects[2].title}
      img={projects[2].previewImg}
      url={projects[2].externalUrl}
      description={projects[2].description}
    />
  )
}