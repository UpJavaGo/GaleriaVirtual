import './App.css';
import React from 'react';
import Header from './Components/Layout/Header';
import { Footer } from './Components/Layout/Footer';
import { Home } from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <div className='container container-fluid'>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Home" element={<Home />}/>
            </Routes>  
        </div>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
