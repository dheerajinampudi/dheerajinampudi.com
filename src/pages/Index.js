import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Dheeraj Inampudi's personal website. India based Manchester Math graduate, "
    + 'CTO of propellor.ai, and a certified AWS Solution Architect'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Me</Link></h2>
          <p>
          My name is Dheeraj Inampudi. I am currently
          the Head of Product at <a href={'https://circuitry.ai/'} target="_blank" > Circuitry.ai. </a>
          </p>
        </div>
      </header>
      <p> Welcome to my website. I appreciate the visit. 👍
        Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my 
        {' '} <Link to="/resume">resume</Link>, 
        {' '} <Link to="/projects">projects</Link>, 
        {' '} view <Link to="/stats">site statistics</Link>, 
        {' '} read my <a href={'https://blog.dheerajinampudi.com/'} target="_blank" > Blog </a>,
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>
        <a href='https://www.credly.com/badges/5595c35e-1310-4b86-bd0c-2f408939512a'>
        <img src='images/SAP.png' width="150" height="150"></img>
        </a>
        <a href='https://www.credly.com/badges/64defbb6-9d3d-4d33-b54f-9546fa54cf3c'>
        <img src='images/SAA.png' width="150" height="150"></img>
        </a>
      </p>
      
    </article>
  </Main>
);

export default Index;
