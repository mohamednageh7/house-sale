import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavagationList = () => {
  return (
    <Fragment>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
          <Link className='nav-link' to='/'>
            Find your home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            Sell your home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            My account
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NavagationList;
