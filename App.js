import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Products from './Products/';
import {ProductData} from './Products/data';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Products heading='Choose your favorite' Data={ProductData}/>
      <Footer/>
    </Router>
   
  );
}

export default App;
