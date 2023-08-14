import projects from '../projects'

// COMPONENTS
import SampleBlock from './SampleBlock'

export default function Samples() {
  return (
    <div id="samples" className="samples-wrapper">
      {projects.map(({ id, title, shortDescription, previewImg, url, blockBg }) => (
        <SampleBlock
          key={id}
          blockBg={blockBg}
          previewImg={previewImg}
          title={title}
          shortDescription={shortDescription}
          url={url}
        />
      ))}
    </div>
  )
}


