import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Claim from './Pages/Claim';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <NavBar/> 
        <Claim/> 
        <Footer/>
    </div>
  );
}

export default App;
