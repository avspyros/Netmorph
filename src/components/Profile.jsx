import skillsAndTech from '../skillsAndTech'
import Container from './Container'
import BlockHeader from './BlockHeader'
import ProfileBlock from './ProfileBlock'

export default function Profile() {

  return (

    <div id="profile" className="profile-wrapper">
      <Container>
        <BlockHeader
          title="Profile"
          description="Over the years, either through self research and experimentation or by working hands on  on real products, I have acquired some expertise or familiarity with the following:"
        />
        <div className="profile-box-wrapper">
          {skillsAndTech.map(block => (
            <ProfileBlock key={block.id}
              title={block.title}
              description={block.description}
            />
          ))}
        </div>
      </Container>
    </div>

  )
}