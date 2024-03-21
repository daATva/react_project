import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import QuestionList from './components/QuestionList/QuestionList';
import QuestionDetails from './components/CourseDetails/CourseDetails';
import PageContainer from './pages/PageContainer/PageContainer';
import './App.scss';
import News from './pages/News/News';
import CourseDetails from './components/CourseDetails/CourseDetails';

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
            <Route
              path="/courses/:id"
              element={
                <PageContainer>
                  <CourseDetails />{' '}
                  {/* Компонент для отображения деталей курса */}
                </PageContainer>
              }
            >
              <Route path="/courses/:id" element={<CourseDetails />} />
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
