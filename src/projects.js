import textswitcher from './assets/text-switcher.png'
import myhabeats from './assets/myhabeats.png'
import gamesboard from './assets/gamesboard.png'

const projects = [
  {
    id: 1,
    slug: "1",
    title: "Text Switcher",
    shortDescription: "A simple tool for converting text, made with React.",
    previewImg: textswitcher,
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
    slug: "2",
    title: "Gamesboard",
    shortDescription: "A multifunctional platform for boardgames",
    previewImg: gamesboard, 
    externalUrl: "https://gamesboard.gr",
    blockBg: "bg-neutral-deep",
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
    id: 3,
    slug: "3",
    title: "Myhabeats",
    shortDescription: "Official website of a behavioral vaccine app",
    previewImg: myhabeats, 
    externalUrl: "https://myhabeats.com/",
    blockBg: "bg-neutral-deeper",
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
  }
]

export default projects