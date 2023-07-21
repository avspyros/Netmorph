export default function BlockHeader({ title, description }) {

  return (
    <div className="block-header">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>

  )
}