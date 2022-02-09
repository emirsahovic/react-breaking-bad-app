import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CharacterProvider } from './context/CharacterContext';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
