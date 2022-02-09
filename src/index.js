import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CharacterProvider } from './context/CharacterContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
