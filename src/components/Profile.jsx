// COMPONENTS
import Container from './Container'
import ProfileHeader from './ProfileHeader'
import ProfileBlock from './ProfileBlock'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {

  // const codeIcon = <FontAwesomeIcon icon={faCode} style={{ fontSize: 36, color: "white" }} />

  return (

    <div className="profile-wrapper">

      <Container>

        <ProfileHeader />
        <div className="profile-box-wrapper">
          <ProfileBlock
            title="1st Feature Title"
            description="Feature description text"
          />
          <ProfileBlock
            title="2nd Feature Title"
            description="Feature description text 2"
          />
          <ProfileBlock
            title="3rd Feature Title"
            description="Feature description text 3"
          />
          <ProfileBlock
            title="4th Feature Title"
            description="Feature description text 4"
          />
          <ProfileBlock
            title="5th Feature Title"
            description="Feature description text 5"
          />
          <ProfileBlock
            title="6th Feature Title"
            description="Feature description text 6"
          />
          <ProfileBlock
            title="7thFeature Title"
            description="Feature description text 7"
          />
          <ProfileBlock
            title="8th Feature Title"
            description="Feature description text 8"
          />
        </div>

      </Container>

    </div>

  )
}