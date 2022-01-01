import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Dheeraj&apos;Inampudi</h2>
        <p><a href="mailto:irk.dheeraj@gmail.com">irk.dheeraj@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos; Dheeraj. I like building things.
        I am a <a href="https://www.manchester.ac.uk/">Manchester Math</a> graduate and
        the CTO of <a href="https://propellor.ai">Propellor.ai</a>. Before Propellor I was
        at <a href="https://thinkbumbeleebee.com">Thinkbumbelee Analytics (Propellor)</a>
        , <a href="https://stratfit.net">Stratfit Fitness Technologies</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Dheeraj&apos;Inampudi <Link to="/">nampudi.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
