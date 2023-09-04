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
        <BlockHeader title="General Info" decor={true} />
        <InfoBlocks />
        <BlockHeader title="My web development journey" decor={true} />
        <Accordion />
      </Container>
      <Footer bgColor='footer-darkest' />
    </ContentWrapper>
  )
}