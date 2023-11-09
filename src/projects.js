import * as images from './assets';

const projects = [
  {
    id: 1,
    slug: '1',
    title: 'Text Switcher',
    shortDescription: 'A simple tool for converting text, made with React.',
    previewImg: images.textswitcher,
    externalUrl: 'https://text-switcher.netlify.app/',
    blockBg: 'bg-neutral',
    description: [
      {
        id: 'par1',
        text: 'Some of the usual tasks in my work include creating url slugs for articles and other content so they can be published online, and also naming files in a specific way. To make my life and that of my team members easier, I decided to create a mini tool that offers some options to convert text.'
      },
      {
        id: 'par2',
        text: 'Since I was learning React.js at the time, I decided to practice that knowledge by building the mini tool with React. While not as challenging as a more complex app, still this project lead me to understand some concepts better and I still use it to this day.'
      }
    ]
  },
  {
    id: 2,
    slug: '2',
    title: 'Imisi Collection',
    shortDescription: 'Fashion Products E-commerce website',
    previewImg: images.imisi,
    externalUrl: 'https://imisicollection.com',
    blockBg: 'bg-neutral-deep',
    description: [
      {
        id: 'par1',
        text: 'This e-commerce website came to be after the business owner was fed up with the old site malfuctioning which resulted in loss of revenue. In addition the whole maintenance and consulting process was non existent.'
      },
      {
        id: 'par2',
        text: 'The new eshop was built on WordPress and Woocommerece with some customizations (CSS and PHP). Design wise, the main goal was to achieve a minimalist and smooth experience with no distractions for the user.'
      },
      {
        id: 'par3',
        text: 'The challenge in this project was not only in terms of building it but mostly transferring the knowledge to the shop manager so that she would handle orders, edit content and engage in digital marketing more efficiently.'
      }
    ]
  },
  {
    id: 3,
    slug: '3',
    title: 'Myhabeats',
    shortDescription: 'Official website of a behavioral health app',
    previewImg: images.myhabeats,
    externalUrl: 'https://myhabeats.com/',
    blockBg: 'bg-neutral-deeper',
    description: [
      {
        id: 'par1',
        text: "This project represents my first official attempt to deliver a fully functional website to a customer. It's a static business identity website designed by my freelance partner."
      },
      {
        id: 'par2',
        text: 'With the knowledge I had by then, I decided to implement the design mockups provided by the designer using Bootstrap 4. A little JS was used here and there and also a PHP contact form which was a challenge at the time.'
      },
      {
        id: 'par3',
        text: 'Overall the result was ok and I sure learned many things along the way but this project is included here mostly as a reminder of how I should not do things in the future. If a had to build this site today I would probably use React.js (plus some useful packages) and Tailwind CSS with some customizations, making everything easier to maintain.'
      }
    ]
  }
];

export default projects;
