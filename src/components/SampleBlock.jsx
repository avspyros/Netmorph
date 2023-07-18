export default function SampleBlock({ title, description }) {
  return (
    <div className="sample-block">
      <div className="preview-container" style={{ backgroundImage: `url("https://fakeimg.pl/600x600")` }}>
        <a href="#"></a>
      </div>
      <div className="excerpt-container">
        <div className="inner">
          <h2>Sample Title</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi quo sed illum magnam repudiandae, eius suscipit quisquam dolores incidunt sapiente sequi ducimus.</p>
        </div>
      </div>
    </div>
  )
}