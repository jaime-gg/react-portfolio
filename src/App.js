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
  useEffect(() => {
    AOS.init({
      duration : 1500
    });
  }, []);

  const [currentPage, setCurrentPage] = useState('About');

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

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <header className="App-header">
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
