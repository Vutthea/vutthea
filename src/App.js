import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';

import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
   
    <>
     <Navbar />
     <Home />
     <About />
     <Portfolio />
     <Experience />
     <Footer />
    </>
  );
}

export default App;
