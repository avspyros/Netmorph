import Button from '../components/Button'
import ContentWrapper from '../components/ContentWrapper'
import Container from '../components/Container'

export default function PageNotFound() {

  return (
    <ContentWrapper>
      <Container>
        <div className="generic-content">
          <h2>Page not found!</h2>
        </div>
        <Button
          text="Back Home"
          url={"/"}
          btnType="btnLink"
        />
      </Container>
    </ContentWrapper>

  )
}