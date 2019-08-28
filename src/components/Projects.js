import React, { PureComponent } from 'react';
import NoLightGallery from './NoLightGallery';

import thumb01 from '../assets/images/website.jpg';
import thumb01b from '../assets/images/deconnect.png';
import thumb02 from '../assets/images/todoapp1.png';
import thumb03 from '../assets/images/loginreg.png';
import thumb06 from '../assets/images/thumbs/3.png';
import thumb06b from '../assets/images/thumbs/3.webp';

const DEFAULT_IMAGES = [
  {
    id: 'thumb2',
    thumbnail: thumb01,
    altThumbnail: thumb01,
    caption: 'melorbany.com',
    tech:
      "Personal Project: This website! Hope you like it. It uses Gatsby.Js to serve static HTML files rather than JavaScript. Which is why it's fast. Hosted with Netlify and Cloudflare.",
    description: 'Tech: React.Js, Gatsby.Js',
    link: '',
  },
  {
    id: 'thumb1',
    thumbnail: thumb01b,
    altThumbnail: thumb01,
    caption: 'DevConnect',
    tech:
      'Personal Project: A social network web app with signup, login, personal profiles, posts, comments, feed, like & unlike system and more.',
    description: 'Tech: MongoDB, Express.Js, React.Js, Redux.Js, Node.Js',
    link: 'https://mdevconnect.herokuapp.com/',
  },
  {
    id: 'thumb1',
    thumbnail: thumb02,
    altThumbnail: thumb02,
    caption: 'Todo List',
    tech:
      'Personal Project: Simple To-Do App I developed during learning React',
    description: 'Tech: HTML, CSS, Express.Js, Node.Js, React.js',
    link: 'https://github.com/mazenelorbany/Todos-List-',
  },
  {
    id: 'thumb1',
    thumbnail: thumb03,
    altThumbnail: thumb03,
    caption: 'Login/Register',
    tech: 'Personal Project: Login/Register App with Mongodb and React',
    description: 'Tech: HTML, CSS, Express.Js, Node.Js, React.js, MongoDB',
    link: 'https://github.com/mazenelorbany/Login-Register-React',
  },
];

export default class Projects extends PureComponent {
  render() {
    return (
      <div>
        <section>
          <br />
          <NoLightGallery
            images={DEFAULT_IMAGES.map(
              ({
                src,
                thumbnail,
                altThumbnail,
                caption,
                tech,
                link,
                description,
                id,
              }) => ({
                src,
                thumbnail,
                altThumbnail,
                caption,
                tech,
                link,
                description,
                id,
              })
            )}
          />
        </section>
      </div>
    );
  }
}
