import ContentWrapper from '../components/ContentWrapper'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Welcome from '../sections/Welcome'
import Profile from '../sections/Profile'
import Samples from '../sections/Samples'
import Contact from '../sections/Contact'


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