import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import Project from '../components/Projects';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="w-100">
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I am a Software developer who's dedicated to develop web and mobile
            Apps
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">volunteer Full Stack developer</h3>
              <div className="subheading mb-3">Salvation Army London-ON</div>
              <p>
                I volunteered to miagrate old HR database system from Microsoft
                Access to React application with MYSQL database Click Here for
                more information.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2019 - present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Developer</h3>
              <div className="subheading mb-3">Ebahn’s Solutions</div>
              <p>
                Developing and designing applications and solutions for smart
                hotel systems.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2017 - June 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Multimedia University</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Engineering -</div>
              <p>GPA: 3.07</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2013 - December 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Fanshawe College</h3>
              <div className="subheading mb-3">
                Graduate certificate (Network and security architecture)
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2019 - December 2019</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-android"></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile Development
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Full-Stack Web development
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              JavaScript
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              NodeJS
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              ReactJS &amp; React-Native
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Oracle &amp; MYSQL Database
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Android Development
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          <Project />
        </div>
      </section>
      
    </div>
    
  </Layout>
);

export default IndexPage;
