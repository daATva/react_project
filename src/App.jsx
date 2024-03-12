import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import QuestionList from './components/QuestionList/QuestionList';
import QuestionDetails from './components/QuestionDetails/QuestionDetails';
import PageContainer from './pages/PageContainer/PageContainer';
import './App.scss';
import News from './pages/News/News';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <PageContainer>
                  <Home />
                </PageContainer>
              }
            />
            <Route
              path="/News"
              element={
                <PageContainer>
                  <News />
                </PageContainer>
              }
            />
            <Route
              path="/interview"
              element={
                <PageContainer>
                  <QuestionList />
                </PageContainer>
              }
            />
            <Route
              path="/interview/:id"
              element={
                <PageContainer>
                  <QuestionDetails />
                </PageContainer>
              }
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
