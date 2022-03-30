import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './components/homepage/Homepage';
import Integerinput from './components/quotes/Integerinput';
import Navbar from './components/navbar/Navbar';

ReactDOM.render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculator" element={<App />} />
        <Route path="/quotes" element={<Integerinput />} />
      </Routes>
    </Router>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
