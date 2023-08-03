import Button from './Button'

export default function SampleBlock({ title, description, previewImg, blockBg, url }) {

  return (
    <div className={`sample-block ${blockBg}`}>
      <div className="preview-container" style={{ backgroundImage: `url("${previewImg}")` }}>
        <a href={url} target='_blank'></a>
      </div>
      <div className="excerpt-container">
        <div className="inner">
          <h3>{title}</h3>
          <p>{description}</p>
          <Button
            text="Learn More"
            url={url}
            btnType="btnLink"
          />
        </div>
      </div>
    </div>
  )
}