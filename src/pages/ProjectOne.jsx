import projects from '../projects'
import Article from '../components/Article'

export default function ProjectOne() {

  return (

    <Article
      title={projects[0].title}
      img={projects[0].previewImg}
      url={projects[0].externalUrl}
      description={projects[0].description}
    />

  )
}