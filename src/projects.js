import textswitcher from './assets/text-switcher.png'

const projects = [
  {
    id: 1,
    title: "Text Switcher",
    shortDescription: "A simple tool for converting text, made with React.",
    previewImg: textswitcher,
    articleImg: "https://placehold.co/1600x800",
    url: "/Project",
    externalUrl: "https://text-switcher.netlify.app/",
    blockBg: "bg-neutral",
    description: [
      {
        id: 'par1',
        text: 'Voluptatibus molestias fuga modi non sed dicta ut, dolore a commodi consequatur pariatur temporibus amet dolorem, libero laborum vel animi itaque quod iusto. Maiores eum id quae sint! Mollitia, est.'
      },
      {
        id: 'par2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatum minus, doloribus est deserunt id numquam enim mollitia animi impedit, reprehenderit sapiente tempora consectetur nobis fuga distinctio veniam aspernatur delectus!'
      },
      {
        id: 'par3',
        text: 'Libero laborum vel animi itaque quod iusto. Maiores eum id quae sint! Mollitia, est.'
      }
    ]
  },
  {
    id: 2,
    title: "Sample Project 2",
    shortDescription: "A simple tool for converting text, made with React.",
    previewImg: "https://fakeimg.pl/600x600",
    articleImg: "https://placehold.co/1600x800",
    url: "/Project",
    previewImg: "https://fakeimg.pl/600x600",
    blockBg: "bg-neutral-deep",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi quo sed illum magnam repudiandae."
  },
  {
    id: 3,
    title: "Sample Project 3",
    shortDescription: "Odio nisi quo sed illum magnam repudiandae, eius suscipit quisquam dolores incidunt sapiente sequi ducimus.",
    url: "https://github.com/avspyros",
    previewImg: "https://fakeimg.pl/600x600",
    blockBg: "bg-neutral-deeper",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nisi quo sed illum magnam repudiandae."
  }
]

export default projects