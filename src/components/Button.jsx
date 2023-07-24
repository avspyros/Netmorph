
export default function Button({ text, url, btnType }) {

  return (
    <div className="btn-container">
      {
        btnType === "submit" ?
          <button type="submit" className="btn">{text}</button> :
          <a href={url} className="btn">{text}</a>
      }
    </div>
  )
}