import React, {useState, useEffect} from 'react';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero'; 
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'
import Contact from './components/Contact';
import Footer from './components/Footer'

import AOS from 'aos';

function App() {
  // THIS IS FOR THE AOS FADING EFFECT 
  useEffect(() => {
    AOS.init({
      duration : 1500
    });
  }, []);

  //SET UP THE ABOUT TO BE RENDERED ON INITIAL LOAD 
  const [currentPage, setCurrentPage] = useState('About');

  //CONDTIONALLY RENDER EACH PAGE DEPENDING ON THE CURRENT-PAGE STATE
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  // UPDATE DEPENDING ON PAGE
  const handlePageChange = (page) => setCurrentPage(page);

  // ALWAYS RENDER THE HEADER, HERO, AND FOOTER, THEN USE THE RENDERPAGE FUNCTION TO INSERT THE BODY CONTENT
  return (
    <div className="App">
      <header className="App-header">
        {/* THE FUNCTIONS WILL BE PUSHED TO THE NAV COMPONENT */}
        <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      </header>
        <main>
          <Hero /> 

          {renderPage()}

          <Footer />
      </main> 
    </div>
  );
}

export default App;
