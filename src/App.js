import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './scss/App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
