import projects from '../projects'
import SampleBlock from './SampleBlock'

export default function Samples() {
  return (
    <div id="samples" className="samples-wrapper">
      {projects.map(({ id, title, shortDescription, previewImg, slug, blockBg }) => (
        <SampleBlock
          key={id}
          blockBg={blockBg}
          previewImg={previewImg}
          title={title}
          shortDescription={shortDescription}
          url={`/project/${slug}`}
        />
      ))}
    </div>
  )
}


