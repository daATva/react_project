import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Sidebar, Footer, CourseDetails } from './components';
import { Home, News } from './pages';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/News" element={<News />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
