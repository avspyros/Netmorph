export default function SampleBlock({ title, description }) {
  return (
    <div className="sample-block">
      <div className="preview-container">
        <img src="https://fakeimg.pl/400x350" alt="sample-preview" />
      </div>
      <div className="excerpt-container">
        <h3>Sample Title</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi quo sed illum magnam repudiandae, eius suscipit quisquam dolores incidunt sapiente sequi ducimus. Magnam eos minima repellendus sapiente commodi deleniti.</p>
      </div>
    </div>
  )
}