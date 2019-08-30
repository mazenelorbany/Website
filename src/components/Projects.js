import React, { PureComponent } from 'react';
import NoLightGallery from './NoLightGallery';

import thumb00 from '../assets/images/website.jpg';
import thumb01 from '../assets/images/website1.jpg';
import thumb01b from '../assets/images/devconnect1.jpg';
import thumb02 from '../assets/images/todoapp1.png';
import thumb03 from '../assets/images/loginreg.png';
import thumb04 from '../assets/images/COH.jpg';
import thumb06 from '../assets/images/bitstaff2.jpg';
import thumb07 from '../assets/images/bitsguest.jpg';
import thumb08 from '../assets/images/hangerApp.jpg';



const DEFAULT_IMAGES = [
  {
    id: 'thumb1',
    thumbnail: thumb01,
    caption: 'Personal Website',
    description:
      'Personal Project : This current Website.',
    tech: 'Tech: GatsbyJS, React.Js',
    link: '',
  },
  {
    id: 'thumb11',
    thumbnail: thumb04,
    caption: 'HRM application',
    description:
      'Volunteer projects : HRM application developed using ReactJs,NodeJS and MYSQL, This application was based on another HRM application using MS Access. The database was migrated to MYSQL and a Front-end using ReactJS was designed to match the old application, but with better performance, functionality and user-interface ',
    tech: 'Tech: GatsbyJS, React.Js',
    link: '',
  },
  {
    id: 'thumb12',
    thumbnail: thumb01b,
    altThumbnail: thumb01,
    caption: 'DevConnect',
    description:
      'Personal Project: A social network web app with signup, login, personal profiles, posts, comments, feed, like & unlike system and more.',
    tech: 'Tech: MongoDB, Express.Js, React.Js, Redux.Js, Node.Js',
    link: 'https://mdevconnect.herokuapp.com/',
  },
  {
    id: 'thumb13',
    thumbnail: thumb06,
    caption: 'Bits Staff',
    description:
      'Bits Staff application for integration with Bits interactive TV. This application is designed to offer staffs a unique way to carryout their daily routine.',
    tech: 'Tech: Android',
    link: 'https://play.google.com/store/apps/details?id=com.mazen.bitsapp',
  },
  {
    id: 'thumb14',
    thumbnail: thumb07,
    caption: 'Bits Guest',
    description:
      'Bits Guest application for integration with Bits interactive TV. This application is designed to offer guests a pleasant experience during their stay in the hotel.',
    tech: 'Tech: Android',
    link: 'https://play.google.com/store/apps/details?id=com.mazen.bitsguest',
  },
 
  {
    id: 'thumb15',
    thumbnail: thumb08,
    caption: 'FYP Project',
    description:
      'Design and develop a motorized cloth dryer rack system for residential usage.\n Design and develop a weather-based sensor module, integrated with the motorizedsystem, design and develop a usernotification system.',
    tech: 'Tech: Android',
    link: '',
  },
  {
    id: 'thumb1',
    thumbnail: thumb02,
    altThumbnail: thumb02,
    caption: 'Todo List',
    description:
      'Personal Project: Simple To-Do App I developed during learning React',
    tech: 'Tech: HTML, CSS, Express.Js, Node.Js, React.js',
    link: 'https://github.com/mazenelorbany/Todos-List-',
  },
  {
    id: 'thumb1',
    thumbnail: thumb03,
    altThumbnail: thumb03,
    caption: 'Login/Register',
    description: 'Personal Project: Login/Register App with Mongodb and React',
    tech: 'Tech: HTML, CSS, Express.Js, Node.Js, React.js, MongoDB',
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
