import Container from '../components/Container';
import Button from '../components/Button';

export default function Welcome() {
  return (
    <header>
      <div id="welcome" className="header-wrapper">
        <div className="section-bg"></div>
        <Container>
          <h1>Spyros Avgoustatos</h1>
          <p className='description'>Multidisciplinary, front-end web developer with over 5 years of exploring, building and maintaining
            user-focused web experiences according to design and brand standards while taking into consideration
            future maintenance issues, code readability and the need for optimization</p>
          <Button
            text="Learn More"
            url="/story"
            btnType="btnLink"
          />
        </Container>
      </div>
    </header>
  );
}