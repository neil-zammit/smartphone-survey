import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Smartphone Survey</h1>
      <p className="text-margin">Press the button to begin</p>
      <br />
      <Link className="button" to="/survey">
        Start Survey
      </Link>
    </div>
  );
};

export default Home;
