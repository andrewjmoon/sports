import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import BaseLayout from './BaseLayout';

function App() {
  return (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  );
}

export default App;
