import React from 'react';
// import './styles/App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './pages/Home';
import UserRegister from './pages/RegsiterForm';
import LoginSSO from './pages/LoginSSO';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<UserRegister />}/>
          <Route path='/login' element={<LoginSSO />} />
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
