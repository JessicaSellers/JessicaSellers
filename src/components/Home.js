import React from 'react';
import '../App.css';
import Navigation from './Nav';
import Footer from './Footer';
import Work from './Work';
import About from './About';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="welcome">Welcome, I'm Jessica Sellers.</h1>
        <div className="personal-summary">A front-end developer and designer based in Chicago, IL.</div>
        <div className="arrow">
          &darr;
        </div>
      </header>
      <Navigation />
      <Work />
      <About />
      <Footer />
    </div>
  );
}

export default Home;