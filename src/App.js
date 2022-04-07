import './App.css';
import Header from './components/Header';
import Hero from './components/Hero'; 
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'
import Contact from './components/Contact';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <head>
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <header className="App-header">
        <Header />
      </header>
        <main>
        <body>
          <Hero /> 
          <About />
          {/* <Portfolio /> */}
          {/* <Resume /> */}
          {/* <Contact /> */} 
        </body>
        {/* <footer>
          <Footer />
        </footer> */}
      </main> 
    </div>
  );
}

export default App;
