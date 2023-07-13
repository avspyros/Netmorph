// COMPONENTS
import ProfileHeader from './ProfileHeader'
import ProfileBlock from './ProfileBlock'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {

  // const codeIcon = <FontAwesomeIcon icon={faCode} style={{ fontSize: 36, color: "white" }} />

  return (

    <div className="profile-wrapper">
      <div className="container">
        <ProfileHeader />
        <div className="profile-box-wrapper">
          <ProfileBlock
            title="Feature Title"
            description="Feature description text"
          />
          <ProfileBlock
            title="2nd Feature"
            description="Feature description text 2"
          />
        </div>
      </div>
    </div>

  )
}