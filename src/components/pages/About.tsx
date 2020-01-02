import React from 'react';
import Navbar from '../layout/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>About</h1>
        <p className="text-margin">
          SPA Survey to gather user preferences regarding smartphones and
          smartphone usage.
        </p>
        <p className="text-margin">Built with React.</p>
      </div>
    </div>
  );
};

export default About;
