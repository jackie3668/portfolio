// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Hero, FeaturedGallery, Project01 } from './components';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /><FeaturedGallery /></>} />
          <Route path="/01" element={<Project01 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
