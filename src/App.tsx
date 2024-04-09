// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Sidebar, Footer } from './components';
import { routes } from './routes/routes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
