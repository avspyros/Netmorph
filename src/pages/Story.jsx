import ContentWrapper from '../components/ContentWrapper'
import PageNav from '../components/PageNav'
import Article from '../components/Article'
import Footer from '../components/Footer'

export default function Story() {

  return (
    <ContentWrapper>
      <PageNav />
      <Article
        title="My Web Developer Journey"
        paragraph="Having been fed up with my retail work, I finally decided to listen to the advice of a friend who was a web designer and thought I should migrate from “mindless drone” jobs to something more creative and engaging."
      />
      <Footer bgColor='footer-darkest' />
    </ContentWrapper>
  )
}