import React, { useEffect, useState } from 'react';
import './Navbar.css';
import menu from '../../asset/ui/hamburger.png';
import close from '../../asset/ui/close.png';

const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(true);
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMobileClick = () => {
    setMenuClicked(true);
    setMenuHidden(!menuHidden);
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 600) {
      setMenuHidden(true);
      setMenuClicked(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuClicked(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className='navbar' id='navbar'>
      <div className="navbar-logo"><h2>Jackie Shen</h2></div>
      <div className="navbar-items-container">
        <img onClick={handleMobileClick} src={menuHidden ? menu : close} alt="" />
        <ul className={`navbar-items ${menuClicked && (menuHidden ? 'slide-out-left' : 'slide-in-left')} ${!menuClicked ? 'hidden' : ''}`}>
          {/* <li><Link to='/'>Home</Link></li>
          <li onClick={() => scrollToSection('featured-gallery')}>SKILLS</li>
          <li onClick={() => scrollToSection('featured-gallery')}>FEATURED PROJECTS</li>
          <li onClick={() => scrollToSection('featured-gallery')}>ALL PROJECTS</li>
          <li onClick={() => scrollToSection('featured-gallery')}>CONTACT</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
