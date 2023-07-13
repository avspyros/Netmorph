export default function ProfileBlock({ title, description }) {
  return (
    <div className="profile-block">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}