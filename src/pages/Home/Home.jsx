import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import './Home.scss';
import Form from '../../components/Form/Form';

const Home = () => {
  return (
    <div className="home">
      <h1>Добро пожаловать в личный кабинет</h1>
      <p>Нужно исправить паддинг тут</p>
      {/* <button>Get Started</button> */}
      <Form />
    </div>
  );
};

export default Home;
