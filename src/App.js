// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, FeaturedGallery, Project01, AllProjects } from './components';
import arrow from '../src/asset/ui/arrow-circle-left.png'

function App() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Router basename='/portfolio'>
      <div className="App">
        <div className='scroll' onClick={scrollToTop}> 
          <img src={arrow} alt="" />
        </div>
        <Routes>
          <Route path="/" element={<><Navbar /><Hero /><FeaturedGallery /></>} />
          <Route path="/01" element={<Project01 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
