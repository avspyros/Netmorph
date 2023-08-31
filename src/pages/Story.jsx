import ContentWrapper from '../components/ContentWrapper'
import Container from '../components/Container'
import BlockHeader from '../components/BlockHeader'
import Accordion from '../components/Accordion'
import PageNav from '../components/PageNav'
import Footer from '../components/Footer'
import InfoBlocks from '../components/InfoBlocks'

export default function Story() {

  return (
    <ContentWrapper>
      <PageNav />
      <Container>
        <InfoBlocks />
        <BlockHeader title="My web development journey" />
        <Accordion />
      </Container>
      <Footer bgColor='footer-darkest' />
    </ContentWrapper>
  )
}