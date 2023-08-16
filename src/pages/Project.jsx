import projects from '../projects'
import ContentWrapper from '../components/ContentWrapper'
import PageNav from '../components/PageNav'
import Article from '../components/Article'
import Footer from '../components/Footer'

export default function Project() {

  const projectData = {
    title: projects[0].title,
    img: projects[0].previewImg,
    url: projects[0].externalUrl,
    description: projects[0].description
  }

  return (
    <ContentWrapper>
      <PageNav />
      <Article
        title={projectData.title}
        img={projectData.img}
        url={projectData.url}
        description={projectData.description}
      />
      <Footer bgColor='footer-darkest' />
    </ContentWrapper>
  )
}