import projects from '../projects'

import { Outlet, useParams } from 'react-router-dom'

import ContentWrapper from '../components/ContentWrapper'
import PageNav from '../components/PageNav'
import Article from '../components/Article'
import Footer from '../components/Footer'

export default function Project() {
  const { projectId } = useParams()
  const projectArticle = projects.find(projectItem => projectItem.slug === projectId)

  return (
    <ContentWrapper>
      <PageNav />
      <Article
        title={projectArticle.title}
        img={projectArticle.previewImg}
        url={projectArticle.externalUrl}
        description={projectArticle.description}
      />
      {/* <Outlet /> */}
      <Footer bgColor='footer-darkest' />
    </ContentWrapper>
  )
}
