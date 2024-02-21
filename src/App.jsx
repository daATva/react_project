import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import QuestionList from './components/QuestionList/QuestionList';
import QuestionDetails from './components/QuestionDetails/QuestionDetails';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/interview" element={<QuestionList />} />
            <Route path="/interview/:id" element={<QuestionDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;