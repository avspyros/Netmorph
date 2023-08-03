import ContentWrapper from '../components/ContentWrapper'
import Accordion from '../components/Accordion'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer'

export default function Story() {

  return (
    <ContentWrapper>
      <PageNav />
      <Accordion />
      <Footer bgColor='footer-darkest' />
    </ContentWrapper>
  )
}