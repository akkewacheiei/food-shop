import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import ShopList from './components/ShopList';
import "./style.css";

function App() {
  return (
    <div className="container">
        <Navbar/>
        <ShopList/>
    </div>
  );
}

export default App;
