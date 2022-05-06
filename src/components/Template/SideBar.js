import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Dheeraj Inampudi</h2>
        <p><a href="mailto:irk.dheeraj@gmail.com">irk.dheeraj@gmail.com</a></p>
      </header>
{/*       <Link to="/"  className="certifications">
        <img src={`${PUBLIC_URL}/images/AWS_combined_2.jpg`} alt="" />
      </Link> */}
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p> I like to share thoughts and stories about programming, 
        product management and leadership.
        I am the CTO of <a href="https://propellor.ai"> Propellor.ai </a>
        and a <a href="https://www.manchester.ac.uk/"> Manchester Math graduate </a>.
        I worked at  <a href="https://thinkbumbeleebee.com"> Thinkbumbelee Analytics </a> and 
        <a href="https://stratfit.net"> Stratfit Fitness Technologies</a> before joining Propellor.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Dheeraj Inampudi <Link to="/">dheerajinampudi.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
