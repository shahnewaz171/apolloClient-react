import React from 'react';
import Foods from './components/Foods/Foods';
import Navbar from './components/shared/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Foods />
    </React.Fragment>
  );
}

export default App;
