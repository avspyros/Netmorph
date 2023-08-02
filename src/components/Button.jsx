import { Link } from 'react-router-dom'

export default function Button({ text, url, btnType }) {

  return (
    <div className="btn-container">
      {
        btnType === "submit" ?
          <button type="submit" className="btn">{text}</button> :
          <Link to={url} className="btn">{text}</Link>
      }
    </div>
  )
}