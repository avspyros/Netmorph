export default function SampleBlock({ title, description, previewImg, blockBg }) {

  return (
    <div className={`sample-block ${blockBg}`}>
      <div className="preview-container" style={{ backgroundImage: `url("${previewImg}")` }}>
        <a href="#"></a>
      </div>
      <div className="excerpt-container">
        <div className="inner">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}