import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import Logo from './output-onlinepngtools.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      
    } else {
      setDropdown(true);
      
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
     
    } else {
      setDropdown(false);
      
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
     
      setDropdown2(false);
    } else {
      
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      
      setDropdown2(false);
    } else {
      
      setDropdown2(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={Logo} width="150px" dan height="50px"
              alt="....." 
            />
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links fas fa-home'  onClick={closeMobileMenu}>
            <i>  </i>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links fas fa-user '
              onClick={closeMobileMenu}
            >
              <i>  </i>
               About us <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/services'
              className='nav-links fas fa-wrench'
              onClick={closeMobileMenu}
            >
              <i>  </i>
              Our Service <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>

          <li className='nav-item '>
            <Link
              to='/products'
              className='nav-links fas fa-laptop'
              onClick={closeMobileMenu}
            >
              <i>  </i>
              Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links fas fa-user-friends'
              onClick={closeMobileMenu}
            >
              <i>  </i>
              Official Partners
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links fas fa-comments'
              onClick={closeMobileMenu}
            >
              <i>  </i>
              FAQ
            </Link>
          </li>
          {/* <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li> */}
        </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
