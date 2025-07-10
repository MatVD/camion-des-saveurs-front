import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Locations from './components/Locations';
import About from './components/About/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Locations />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;