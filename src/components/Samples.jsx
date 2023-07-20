// COMPONENTS
import SampleBlock from './SampleBlock'

export default function Samples() {
  return (
    <div id="samples" className="samples-wrapper">
      <SampleBlock
        blockBg="bg-neutral"
        previewImg="https://fakeimg.pl/600x600"
        title="Sample 1"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi quo sed illum magnam repudiandae, eius suscipit quisquam dolores incidunt sapiente sequi ducimus."
      />
      <SampleBlock
        blockBg="bg-neutral-deep"
        previewImg="https://placehold.co/600x600"
        title="Sample 2"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi quo sed illum magnam repudiandae."
      />
      <SampleBlock
        blockBg="bg-neutral-deeper"
        previewImg="https://fakeimg.pl/600x600"
        title="Sample 3"
        description="Odio nisi quo sed illum magnam repudiandae, eius suscipit quisquam dolores incidunt sapiente sequi ducimus."
      />
    </div>
  )
}