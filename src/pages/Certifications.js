import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Certifications"
    description="Contact Dheeraj Inampudi via email @ irk.dheeraj@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Certifications</Link></h2>
        </div>
      </header>
    <div>
    <h2>Official Badges</h2>
    <p> 
        <a href='https://www.credly.com/badges/5595c35e-1310-4b86-bd0c-2f408939512a'>
        <img src='images/AWS_pro_badge_2.png' width="150" height="150"></img>
        </a>
        <a href='https://www.credly.com/badges/64defbb6-9d3d-4d33-b54f-9546fa54cf3c'>
        <img src='images/AWS_Associate_Badge.png' width="150" height="150"></img>
        </a>
        <a href='https://www.credly.com/badges/d2dc2883-3cb2-4e01-bde7-4c500d7799e2/public_url'>
        <img src='images/SAS_cred.png' width="150" height="150"></img>
        </a>
      </p>
      <h2>Online Certifications</h2>
      <p>
      </p>
      <h3>AWS Courses</h3>
      <p>
        {/*  AWS Certified Solutions Architect Professional SAP-C01  */}
        <a href='https://www.udemy.com/certificate/UC-71863b8b-634c-4083-9893-65354e020cc9/'>
        <img src='images/Udemy_1.jpeg' width="413" height="319"></img>
        </a>
        </p>
      <h3>Data Science Courses</h3>
      <p>
        {/*Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization */}
        <a href='https://coursera.org/share/a08f0906e4d74a3ddd4d8a12bf9fc190'>
        <img src='images/DL_1.jpg' width="413" height="319"></img>
        </a>
        {/* Neural Networks and Deep Learning */}
        <a href='https://coursera.org/share/6f7b621329bc539f46cf6fc9d388d463'>
        <img src='images/DL_2.jpg' width="413" height="319"></img>
        </a>
        {/* Structuring Machine Learning Projects */}
        <a href='https://coursera.org/share/9625d30ac85dd16c3974a73b8defab81'>
        <img src='images/DL_3.jpg' width="413" height="319"></img>
        </a>
        {/* Machine Learning */}
        <a href='https://coursera.org/share/d6308b1ff3bf16fa3805b0877d612555'>
        <img src='images/ML_1.jpg' width="413" height="319"></img>
        </a>
      </p>
    </div>
    </article>
  </Main>
);

export default Contact;
