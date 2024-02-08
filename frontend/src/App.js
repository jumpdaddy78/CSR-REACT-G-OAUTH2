import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import MeinBereich from "./components/MeinBereich";
import { Routes, Route } from "react-router-dom";

function App() {
 return (
    <div className="App">
      // Unsere Liste von Routen
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='about' element={ <About/> } />
        <Route path='login' element={ <Login/> } />
        <Route path='myspace' element={ <MeinBereich/> } />
      </Routes>
    </div>
  );
}

export default App