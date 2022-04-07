import React, {useEffect} from 'react';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero'; 
import About from './components/About';
import Portfolio from './components/Portfolio';
// import Resume from './components/Resume'
// import Contact from './components/Contact';
import Footer from './components/Footer'
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration : 1500
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <main>
          <Hero /> 
          <About />
          <Portfolio />
          {/* <Resume /> */}
          {/* <Contact /> */} 

          <Footer />
      </main> 
    </div>
  );
}

export default App;
