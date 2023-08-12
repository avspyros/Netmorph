import ContentWrapper from '../components/ContentWrapper'
import PageNav from '../components/PageNav'
import Article from '../components/Article'
import Footer from '../components/Footer'

export default function Project() {

  return (
    <ContentWrapper>
      <PageNav />
      <Article
        title="Project 1 Title"
        imgPath="https://placehold.co/1600x800"
      />
      <Footer bgColor='footer-darkest' />
    </ContentWrapper>
  )
}