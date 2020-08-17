import React from 'react';
import NavigationList from './NavagationList';
import { Link } from 'react-router-dom';
import SearchField from './SearchField';
import Logo from './logo.png';
import './style.scss';

const Navbar = () => {
  return (
    <div className='container-fluid my-nav'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light navbar-view'>
        <Link className='navbar-brand' to='/'>
          <img src={Logo} alt='logo' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <NavigationList />
          <SearchField />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
