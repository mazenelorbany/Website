import React from 'react';

import Layout from '../components/Layout';
import img from '../assets/images/oraclecert.jpg';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import Project from '../components/Projects';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="w-100">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <h3>software development is my passion 💻</h3>
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
                Access to React application with MYSQL database Click{' '}
                <a href="https://github.com/mazenelorbany/COH">Here</a> for more
                information.
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
              <li>
                Designed an android application for hotel staff’s use{' '}
                <a href="https://play.google.com/store/apps/details?id=com.mazen.bitsapp">
                  Bits Staff.
                </a>
              </li>
              <li>
                Designed an android application for hotel Guest’s use{' '}
                <a href="https://play.google.com/store/apps/details?id=com.mazen.bitsapp">
                  Bits Guest.
                </a>
              </li>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2017 - June 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Multimedia University</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Engineering -GPA: 3.07</div>
              <p></p>
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

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
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

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="Certificates"
      >
        <div className="w-100">
          <h2 className="mb-5">Certificates</h2>
          <img className="w-100" src={img} style={{ marginBottom: '2em' }} />
        </div>
      </section>

      <hr className="m-0" />
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center w-100"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          {/* <Project /> */}
        </div>
      </section>
      <div style={{ 'text-align': 'center' }}>
        © 2019 Mazen Elorbany. All rights reserved. This site is built with
        Gatsby and hosted on Netlify. The code is open-source on
        <a href="https://github.com/anubhavsrivastava/gatsby-starter-resume">
          Github
        </a>
        .
      </div>
    </div>
  </Layout>
);

export default IndexPage;
