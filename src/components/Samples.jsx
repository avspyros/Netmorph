// COMPONENTS
import SampleBlock from './SampleBlock'
import textSwitcher from "../assets/text-switcher.png"

const samplesData = [
  {
    id: 1,
    title: "Sample 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi quo sed illum magnam repudiandae, eius suscipit quisquam dolores incidunt sapiente sequi ducimus.",
    url: "https://text-switcher.netlify.app/",
    previewImg: textSwitcher,
    blockBg: "bg-neutral"
  },
  {
    id: 2,
    title: "Sample 2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi quo sed illum magnam repudiandae.",
    url: "https://github.com/avspyros",
    previewImg: "https://fakeimg.pl/600x600",
    blockBg: "bg-neutral-deep"
  },
  {
    id: 3,
    title: "Sample 3",
    description: "Odio nisi quo sed illum magnam repudiandae, eius suscipit quisquam dolores incidunt sapiente sequi ducimus.",
    url: "https://github.com/avspyros",
    previewImg: "https://fakeimg.pl/600x600",
    blockBg: "bg-neutral-deeper"
  }
]

export default function Samples() {
  return (
    <div id="samples" className="samples-wrapper">
      {samplesData.map(({ id, blockBg, previewImg, title, description, url }) => (
        <SampleBlock key={id} blockBg={blockBg} previewImg={previewImg} title={title} description={description} url={url} />
      ))}
    </div>
  )
}