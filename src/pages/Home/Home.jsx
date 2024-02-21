import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Frontend Interview</h1>
      <p>
        This website is designed to help you prepare for frontend interviews by
        providing a collection of common interview questions and answers.
      </p>
      <button>Get Started</button>
    </div>
  );
};

export default Home;