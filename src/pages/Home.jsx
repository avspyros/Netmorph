
// COMPONENTS
import Navbar from '../components/Navbar'
import ContentWrapper from '../components/ContentWrapper'
import Welcome from '../components/Welcome'
import Profile from '../components/Profile'
import Samples from '../components/Samples'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div>
      <Navbar />
      <ContentWrapper>
        <Welcome />
        <Profile />
        <Samples />
        <Contact />
        <Footer />
      </ContentWrapper>
    </div>
  )
}