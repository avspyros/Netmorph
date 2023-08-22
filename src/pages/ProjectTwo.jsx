import projects from '../projects'
import Article from '../components/Article'

export default function ProjectTwo() {

  return (
    <Article
      title={projects[1].title}
      img={projects[1].previewImg}
      url={projects[1].externalUrl}
      description={projects[1].description}
    />
  )
}