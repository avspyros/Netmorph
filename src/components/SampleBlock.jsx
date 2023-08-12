import { Link } from 'react-router-dom'
import Button from './Button'

export default function SampleBlock({ title, shortDescription, previewImg, blockBg, url }) {

  return (
    <div className={`sample-block ${blockBg}`}>
      <div className="preview-container"
        style={{ backgroundImage: `url("${previewImg}")` }}>
        <Link to={url}></Link>
      </div>
      <div className="excerpt-container">
        <div className="inner">
          <h3>{title}</h3>
          <p>{shortDescription}</p>
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