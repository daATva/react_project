import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import './Home.scss';

const Home = () => {
  return (
    <PageContainer>
      <div className="home">
        <h1>Welcome to Frontend Interview</h1>
        <p>
          This website is designed to help you prepare for frontend interviews by
          providing a collection of common interview questions and answers.
        </p>
        <button>Get Started</button>
      </div>
    </PageContainer>
  );
};

export default Home;