import * as images from './assets'

const projects = [
  {
    id: 1,
    slug: "1",
    title: "Text Switcher",
    shortDescription: "A simple tool for converting text, made with React.",
    previewImg: images.textswitcher,
    externalUrl: "https://text-switcher.netlify.app/",
    blockBg: "bg-neutral",
    description: [
      {
        id: 'par1',
        text: 'Some of the usual tasks in my work include creating url slugs for articles and other content so they can be published online, and also naming files in a specific way. To make my life and that of my team members easier, I decided to create a mini tool that offers some options to convert text.'
      },
      {
        id: 'par2',
        text: 'Since I was learning React.js at the time, I decided to practice that knowledge by building the mini tool with React. While not as challenging as a weather app I was trying to build at that time, still the project made me understand some concepts better and I still use it to this day.'
      },
    ]
  },
  {
    id: 2,
    slug: "2",
    title: "Gamesboard",
    shortDescription: "A multifunctional platform for boardgames",
    previewImg: images.gamesboard, 
    externalUrl: "https://gamesboard.gr",
    blockBg: "bg-neutral-deep",
    description: [
      {
        id: 'par1',
        text: 'This personal project was born when I realized there was a disconnect among groups and individuals, who wanted to sell/buy used board games and relevant accessories or who had difficulty finding co-players or teams to play with.'
      },
      {
        id: 'par2',
        text: 'It is built on a WordPress theme with some customizations. As I have to take care of all the project’s aspects the final “product” is not ready yet since various parts of the platform are still being developed. Nevertheless, it is displayed here as a snapshot of a work in progress.'
      },
      {
        id: 'par3',
        text: 'The platform is in Greek as it targets Greek hobby enthusiasts and it is about to launch before the end of 2023.'
      }
    ]
  },
  {
    id: 3,
    slug: "3",
    title: "Myhabeats",
    shortDescription: "Official website of a behavioral health app",
    previewImg: images.myhabeats, 
    externalUrl: "https://myhabeats.com/",
    blockBg: "bg-neutral-deeper",
    description: [
      {
        id: 'par1',
        text: 'This project represents my first official attempt to deliver a fully functional website to a customer. It would be a static business identity website with custom design created by my freelance colleague and collaborator.'
      },
      {
        id: 'par2',
        text: 'With the knowledge I had by then, I decided to implement the design mockups provided by the designer using Bootstrap 4. A little JS was used here and there and also a PHP contact form which was a challenge at the time.'
      },
      {
        id: 'par3',
        text: 'Overall the result was ok and I sure learned many things along the way but this project is included here mostly as a reminder of how I should not do things in the future. If a had to build this site today I would use React.js (plus some useful packages) and probably Tailwind CSS with some customizations, making everything easier to maintain and with cleaner code.'
      }
    ]
  }
]

export default projects