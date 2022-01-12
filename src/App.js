import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Service from './pages/Service';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' component = {Dashboard} />
          <Route path='/service' component = {Service}/>
          
          
          
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
