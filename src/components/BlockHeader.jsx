export default function BlockHeader({ title, description, decor }) {

  return (
    <div className={`block-header ${decor ? 'block-header-decor' : ''}`}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>

  )
}